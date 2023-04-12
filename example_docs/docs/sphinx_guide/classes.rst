=======
Classes
=======

.. py:class:: Electron(size=None, name=None)

  Create an electron.

  :param float size: How big should this thing be?
  :param str name: The name we'll call the electron. Nicknames preferred.
  :raises ValueError: You did something wrong

  .. rubric:: Methods

  .. py:attribute:: compute_momentum(velocity)

    Compute the electrons velocity.

    :param float velocity: The electrons velocity
    :return: The computed momentum
    :rtype: float
    :raises ValueError: You did something wrong

  .. rubric:: Attributes

  .. py:attribute:: charge

  .. py:attribute:: mass
    :type: float
    :value: 2.1

    The mass of the electron.

  .. py:attribute:: really_long_named_attribute_that_probably_does_not_fit_nicely

    A bit too verbose if you ask me.
