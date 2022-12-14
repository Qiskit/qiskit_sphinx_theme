================================================
Crossreference to other pages from documentation
================================================

This guide shows how to reference to other pages in the documentation.

Pre-requisites
==============

This guide assumes your Qiskit project already has a working Sphinx documentation project in a folder called ``docs``. If you don't have it, you can set it up with
`sphinx-quickstart <https://www.sphinx-doc.org/en/master/man/sphinx-quickstart.html>`_.

Add the links
=============

There are several types of pages that can be referenced:

* Module pages
* Function pages
* Class pages
* Method pages
* Attribute pages

Module pages
------------

If the page to which you want to link corresponds to a module, you should use ``:mod:`qiskit.module_name```.
An example of Qiskit module is :mod:`qiskit.circuit` and the link can be written as:

.. code-block:: text

    :mod:`qiskit.circuit`

Function pages
--------------

If you want to link to a function page, you need to use ``:func:`your_function```. For example, you can link to the :func:`qiskit.visualization.circuit_drawer` by writing:

.. code-block:: text

    :func:`qiskit.visualization.circuit_drawer`

Class pages
-----------

In order to link to a class page, you should use ``:class:`your_class```. As an example, you can link to :class:`qiskit.circuit.QuantumCircuit` by writing:

.. code-block:: text

    :class:`qiskit.circuit.QuantumCircuit`

Method pages
------------

If your objective is to link the page of a method, you can use ``:meth:`your_method```. For example, to link to the :meth:`qiskit.circuit.QuantumCircuit.draw` method if you write:

.. code-block:: text

    :meth:`qiskit.circuit.QuantumCircuit.draw`

Attribute pages
---------------

If you want to link to an attribute page, you should use ``:attr:`your_attribute```. You can link, for example, to :attr:`qiskit.circuit.QuantumCircuit.parameters` by writing:

.. code-block:: text

    :attr:`qiskit.circuit.QuantumCircuit.parameters`

Shorten the links
=================

You can shorten the links if you add ``~`` just before the name of your object (``:obj:`~your_object```). For example, :class:`~qiskit.circuit.QuantumCircuit` is shorter than :class:`qiskit.circuit.QuantumCircuit`. This last sentence is written as:

.. code-block:: text

    For example, :class:`~qiskit.circuit.QuantumCircuit` is shorter than :class:`qiskit.circuit.QuantumCircuit`.

Shorten the reference
=====================

It's not always necessary to specify the full name of your object when writing the reference. For example, you can write ``:class:`.QuantumCircuit``` instead of ``:class:`qiskit.circuit.QuantumCircuit``` to link to :class:`.QuantumCircuit` if no other class from any module is called ``QuantumCircuit``. If there is another class with the same name, you will get a warning from Sphinx.