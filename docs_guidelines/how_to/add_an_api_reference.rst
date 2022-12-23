====================
Add an API reference
====================

This guide shows how to add an API reference page to your documentation.

Create a new API reference
==========================

In order to create an API reference, you need to find the function or class for which you want to include the reference in the ``qiskit_x`` folder of your repository ``qiskit-x``.
Then you have to create a docstring like those ones.

.. code-block:: python

    class YourClass:
        """This is the API reference for
        YourClass.
        """
        def __init__():
        ...
    
    def your_func(x):
        """This is the reference
        for your_func.
        """
        ...

Update the page
===============

In order to update the page you need to add your class or function to the ``__init__.py`` of the module(s) in which it's included. This can be done by adding the name to a :rst:dir:`sphinx:toctree` like this one:

.. code-block:: python

    .. autosummary::
        :toctree: ../stubs/
        YourClass
        your_func