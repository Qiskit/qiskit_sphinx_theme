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
import sys
from pathlib import Path


def build_image(tag: str, dockerfile: str) -> None:
    subprocess.run(
        ["docker", "build", "-t", tag, "-f", f"tests/js/{dockerfile}", "."],
        check=True,
    )


def build_docs(theme: str) -> None:
    subprocess.run(["tox", "-e", theme], check=True)


def run_image(theme: str) -> None:
    snapshot_folder = Path.cwd() / "tests" / "js" / f"{theme}.test.js-snapshots"
    subprocess.run(
        [
            "docker",
            "run",
            "--rm",
            "--init",
            "-v",
            f"{Path.cwd() / 'snapshot_results'}:/snapshot_results",
            "-v",
            f"{snapshot_folder}:/tests/js/{theme}.test.js-snapshots",
            f"qiskit_sphinx_theme_{theme}",
        ],
        check=True,
    )


def main() -> None:
    build_image("qiskit_sphinx_theme_base", "Dockerfile.base")
    theme = sys.argv[1]
    build_docs(theme)
    build_image(f"qiskit_sphinx_theme_{theme}", f"Dockerfile.{theme}")
    run_image(theme)


if __name__ == "__main__":
    main()
