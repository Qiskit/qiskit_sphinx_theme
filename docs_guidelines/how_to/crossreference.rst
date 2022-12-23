================================================
Crossreference to other pages from documentation
================================================

This guide shows how to reference to other pages in the documentation.

.. warning::

    Actual crossreferencing is only possible with ``.rst`` files. If you are trying to crossreference from a Jupyter notebook (``.ipynb``),
    you are actually linking to an external page, and therefore you should check :doc:`this guide <add_external_links>` instead.



Pre-requisites
==============

This guide assumes your Qiskit project already has a working Sphinx documentation project in a folder called ``docs``. If you don't have it, you can set it up with
:doc:`sphinx-quickstart <sphinx:man/sphinx-quickstart>`.

Add the links
=============

There are several types of pages that can be referenced:

* Module pages
* Function pages
* Class pages
* Method pages
* Attribute pages
* Pages from other documentation projects

Module pages
------------

If the page to which you want to link corresponds to a module, you should use ``:mod:`your_module```.
An example of Qiskit module is :mod:`qiskit.visualization` and the link can be written as:

.. code-block:: text

    :mod:`qiskit.visualization`

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


Pages from other documentation projects
---------------------------------------

You can also use practically the same syntax to link to pages from other documentation projects. For this to work you need to
add :mod:`sphinx:sphinx.ext.intersphinx` to the :confval:`sphinx:extensions` variable of your ``docs/conf.py``.

After that, you'd need to create a new variable called :confval:`sphinx:intersphinx_mapping` in your ``docs/conf.py``. This variable
has to be a dictionary whose keys are the name of the other projects (or any desired shortcut) and whose values are tuples that include
the HTML page of the corresponding documentation and the object inventory. If the inventory is set to ``None``, the 

The basic syntax is then:

.. code-block:: python

    intersphinx_mapping = {"package": ("package_url", None)}

For example, if you want to add Qiskit's and Sphinx's documentation you can write this:

.. code-block:: python

    intersphinx_mapping = {
        "qiskit": ("https://qiskit.org/documentation/", None),
        "sphinx": ("https://www.sphinx-doc.org/en/master/", None)
    }

Once you have set the :confval:`sphinx:intersphinx_mapping`, you can link to any :mod:`role <sphinx:roles>` like
``:mod:``, ``:func:`` or ``:class:`` in the same way as the previous sections, that is, ``:role:`name```. 

However, if you want to make sure you are taking the object from the documentation of a specific package, the name of the object has to be preceded by that of the
project that you set in :confval:`sphinx:intersphinx_mapping`, followed by a colon ``:``. So the syntax is:

.. code-block:: text

    :role:`package:name`

For example, to link to :class:`qiskit.circuit.QuantumCircuit` you can write both ``:class:`qiskit.circuit.QuantumCircuit``` or
``:class:`qiskit:qiskit.circuit.QuantumCircuit``. In this case it doesn't matter because there's only one class with this name.

.. note::

    Strictly speaking, what you are doing with :mod:`~sphinx.ext.intersphinx` is linking to external pages but with the crossreference syntax.
    For more information about linking to external pages, check :doc:`this guide <add_external_links>`.



Shorten the links
=================

You can shorten the links if you add ``~`` just before the name of your object (``:obj:`~your_object```). For example, :class:`~qiskit.circuit.QuantumCircuit` is shorter than :class:`qiskit.circuit.QuantumCircuit`. This last sentence is written as:

.. code-block:: text

    For example, :class:`~qiskit.circuit.QuantumCircuit` is shorter than :class:`qiskit.circuit.QuantumCircuit`.

Shorten the reference
=====================

It's not always necessary to specify the full name of your object when writing the reference. For example, you can write ``:class:`.QuantumCircuit``` instead of ``:class:`qiskit.circuit.QuantumCircuit``` to link to :class:`.QuantumCircuit` if no other class from any module is called ``QuantumCircuit``. If there is another class with the same name, you will get a warning from Sphinx.
You can also set any title you want for your links by using the following syntax: ``:role:`title <name>```. For example, you can add
:class:`this link <qiskit.circuit.QuantumCircuit>` by writing:

.. code-block:: text

    :class:`this link <qiskit.circuit.QuantumCircuit>`
