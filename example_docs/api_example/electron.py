
class Electron:
    """A representation of an electron."""

    def __init__(self, size: str = None, name: str = None) -> None:
        """Create an electron.

        :param size: How big should this thing be?
        :param name: The name we'll call the electron. Nicknames preferred.
        :raises ValueError: You did something wrong
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

        :param velocity: The electron's velocity
        :return: The computed momentum.
        :raises ValueError: You did something wrong
        """
    
    def method_with_a_reallyyreallreallyreallyreallyreallyreallreallyreallyreallyreally_long_title(self):
        """blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah"""
