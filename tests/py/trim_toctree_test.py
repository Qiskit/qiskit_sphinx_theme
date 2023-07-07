# This code is part of Qiskit.
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

import pytest

from qiskit_sphinx_theme.trim_toctree import is_method_stub


@pytest.mark.parametrize(
    "stub",
    [
        "stubs/api_example.Electron.compute_momentum",
        "stubs/api_example.Electron.compute231",
        "stubs/api_example.ElectronSubclass.compute_momentum",
        "stubs/api_example.ElectronSubclass.compute231",
        "stubs/api_example.Electron123.compute_momentum",
        "stubs/api_example.Electron123.compute231",
        "stubs/api_example.submodule_123.Electron.compute_momentum",
        "stubs/api_example.submodule_123.Electron.compute231",
    ],
)
def test_is_method_stub_true(stub: str) -> None:
    assert is_method_stub(stub) is True


@pytest.mark.parametrize(
    "stub",
    [
        "stubs/api_example.electron.compute_momentum",
        "stubs/api_example.electron.compute231",
        "stubs/api_example.electron.compute.momentum",
        "stubs/api_example.electronSubclass.compute_momentum",
        "stubs/api_example.electronSubclass.compute231",
        "stubs/api_example.submodule_123.Electron",
        "stubs/api_example.submodule_123.Electron123",
        "stubs/api_example",
        "api_example.Electron.compute_momentum",
        "another_folder/api_example.Electron.compute_momentum",
    ],
)
def test_is_method_stub_false(stub: str) -> None:
    assert is_method_stub(stub) is False
