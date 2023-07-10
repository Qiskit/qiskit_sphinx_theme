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

"""Check that our vendored web components are identical between the different themes."""

from pathlib import Path


def test_top_nav_bar():
    furo = Path(
        "src/qiskit_sphinx_theme/theme/qiskit-sphinx-theme/static/js/web-components/top-nav-bar.js"
    ).read_text("utf-8")
    pytorch = Path(
        "src/qiskit_sphinx_theme/pytorch/static/js/web-components/top-nav-bar.js"
    ).read_text("utf-8")
    assert furo == pytorch
