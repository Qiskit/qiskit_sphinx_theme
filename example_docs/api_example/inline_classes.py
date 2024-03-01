from __future__ import annotations


class SimpleInlineClass:
    """This is a simple class that does not have
    any methods or attributes.

    It only has the class description and constructor.
    Many classes in Qiskit docs are simple like this.
    """

    def __init__(self, arg1: str) -> None:
        self.arg1 = arg1


class InlineClassWithMethods:
    """This class is more involved.

    Note how the methods and attributes are rendered and
    indented when this class is inlined on the docs page.
    """

    CLASS_ATTRIBUTE: str = "An important part of any API."

    @property
    def interest_rate(self):
        pass

    def method1(self) -> int:
        """A simple method."""
        return 0

    def method2(
        self, arg1: int | float, arg2: list[InlineClassWithMethods], description: str
    ) -> tuple[int, InlineClassWithMethods]:
        """A method with a lot of args!

        This method will use a Hamiltonian to reach quantum advantage. Hamilton: great play & the
        secret to quantum computing. What a polymath.

        Args:
            arg1: All numbers accepted.
            arg2: A list of other instances, although these will be discarded.
            description: If your description is too boring or too cryptic, this program
                will crash your computer.
        """
        return [0, self]


class CustomException(Exception):
    """See how exceptions render too."""
