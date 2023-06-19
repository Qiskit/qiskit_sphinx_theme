"""
================================
API example (:mod:`api_example`)
================================

.. currentmodule:: api_example

Welcome to my super cool module!

.. note::
  This is an example!

Testing internal references... :meth:`.Electron.compute_momentum`.

Contents
========

.. autosummary::
   :toctree: ../stubs/

   Electron
   my_function
"""

from __future__ import annotations

from api_example.electron import Electron


def my_function(input1: str, input2: str, input3: str | None = None, **kwargs) -> int:
    """A function that does awesome stuff.

    Returns:
        Did the function work.

    Raises:
        ValueError: If the inputs are not the correct values.
        TypeError: If the inputs are not strings.
    """
