==============================
Write mathematical expressions
==============================

This guide shows how to add :math:`\LaTeX` expressions to documentation.

There are two ways to insert mathematical expressions with Sphinx:

* Inside the text (``:math:``).
* In a separate block (``.. math::``).

Mathematical expressions inside the text.
-----------------------------------------

If you want to include some formula in a paragraph you can use ``:math:`your_formula```. For example, Euler's identity states that :math:`e^{i \pi} + 1 = 0`. This last sentence was written as:

.. code-block:: text

    For example, Euler's identity states that :math:`e^{i \pi} + 1 = 0`

Mathematical expressions in a separate block
--------------------------------------------

If you want your mathematical formulas to be written separately, you can use ``.. math::``. For example, Euler's formula states that

.. math::

    e^{i\theta} = \cos(\theta) + i\; \sin(\theta).

This last expression was written as: 

.. code-block:: text

    .. math::

        e^{i\theta} = \cos(\theta) + i\; \sin(\theta).