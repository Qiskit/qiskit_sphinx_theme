#!/usr/bin/env python3
# This code is a Qiskit project.
#
# (C) Copyright IBM 2023.
#
# This code is licensed under the Apache License, Version 2.0. You may
# obtain a copy of this license in the LICENSE.txt file in the root directory
# of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this
# copyright notice, and modified files need to carry a notice indicating
# that they have been altered from the originals.

import subprocess
from pathlib import Path

TAG = "qiskit-sphinx-theme-snapshots"


def build_image() -> None:
    subprocess.run(
        ["docker", "build", "-t", TAG, "-f", f"tests/js/Dockerfile", "."],
        check=True,
    )


def build_docs() -> None:
    subprocess.run(["tox", "-e", "docs"], check=True)


def run_image() -> None:
    snapshot_folder = Path.cwd() / "tests" / "js" / "tests.js-snapshots"
    subprocess.run(
        [
            "docker",
            "run",
            "--rm",
            "--init",
            "-v",
            f"{Path.cwd() / 'snapshot_results'}:/snapshot_results",
            "-v",
            f"{snapshot_folder}:/tests/js/tests.js-snapshots",
            TAG,
        ],
        check=True,
    )


def main() -> None:
    build_image()
    build_docs()
    run_image()


if __name__ == "__main__":
    main()
