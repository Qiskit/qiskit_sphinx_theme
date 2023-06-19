from __future__ import annotations

from typing import overload


class Electron:
    """A representation of an electron.

    Examples:

        .. code-block:: python

            from api_example import Electron

            ELECTRON = Electron(size="2GB", name="QuantumComputing")
    """

    def __init__(self, size: str = None, name: str = None) -> None:
        """Create an electron.

        Args:
            size: How big should this thing be?
            name: The name we'll call the electron. Nicknames preferred.

        Raises:
            ValueError: You did something wrong
        """

    @property
    def charge(self):
        pass

    @property
    def mass(self) -> float:
        """The mass of the electron."""
        return 2.1

    @property
    def really_long_named_attribute_that_probably_does_not_fit_nicely(self):
        """A bit too verbose if you ask me."""

    def compute_momentum(self, velocity: float) -> float:
        """Compute the electron's velocity.

        Args:
            velocity: The electron's velocity

        Returns:
            The computed momentum.

        Raises:
            ValueError: You did something wrong
        """

    def method_with_a_reallyyreallreallyreallyreallyreallyreallreallyreallyreallyreally_long_title(
        self,
    ):
        """blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah"""

    @overload
    def overloaded_func(
        self,
        arg1: tuple[str, str],
        arg2: list[str],
        arg3: int,
        arg4: Electron,
    ) -> None:
        ...

    @overload
    def overloaded_func(
        self,
        arg1: tuple[int, int],
        arg2: list[int],
        arg3: bool,
        arg4: set[Electron],
    ) -> None:
        ...

    def overloaded_func(
        self,
        arg1: tuple[str, str] | tuple[int, int],
        arg2: list[str] | list[int],
        arg3: int | bool,
        arg4: Electron | set[Electron],
    ) -> None:
        """This is meant to test out https://github.com/Qiskit/qiskit_sphinx_theme/pull/319.

        Args:
            arg1: Tuples ftw!
            arg2: But lists are more flexy.
            arg3: Primitive values are good too.
            arg4: Recursionnnnn.
        """
