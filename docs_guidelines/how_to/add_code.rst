=========================
Add code to documentation
=========================

This guide shows how to include code in your documentation.

Pre-requisites
==============

This guide assumes your Qiskit project already has a working Sphinx documentation project in a folder called ``docs``. If you don't have it, you can set it up with
`sphinx-quickstart <https://www.sphinx-doc.org/en/master/man/sphinx-quickstart.html>`_.

There are two ways to have code in your docs:

* As part of the text.
* In a separate block.

Code as part of the text
========================

If you want to include a snippet of code inside your text, you only need to surround your code with pairs of backquotes, that is,  ````your_code````. So if you want to say that the output of ``2>3`` is ``False``, what you write is:

.. code-block:: text

    the output of ``2>3`` is ``False``

Code blocks
===========

There are several ways to include code cells in your documentation:

* Executable cells with ``jupyter-execute``.
* Non-executable cells with ``code-block``.
* Testable code cells with ``doctest``.

``jupyter-execute``
-------------------

With ``jupyter-execute`` you can include cells that are executed in a Jupyter kernel and show the output of that code in your documentation. The syntax is:

.. code-block:: text

    .. jupyter-execute::

        your_code

For example, you can run this cell:

.. jupyter-execute::

    from qiskit import QuantumCircuit

    qc = QuantumCircuit(2)
    qc.h(0)
    qc.cx(0,1)
    qc.draw('mpl')

In order to do that, you have to write:

.. code-block:: text

    .. jupyter-execute::

        from qiskit import QuantumCircuit

        qc = QuantumCircuit(2)
        qc.h(0)
        qc.cx(0,1)
        qc.draw('mpl')

.. note::

    For the ``jupyter-execute`` cells to appear you need to add the extension ``jupyter_sphinx`` to the ``docs/conf.py`` of your repository.



``code-block``
--------------

If you don't want your code to be executed, you can use ``code-block``, whose syntax is:

.. code-block:: text

    .. code-block:: language

        your_code

You can pick as ``language`` any of the short names of the lexers supported by `Pygments <https://pygments.org/docs/lexers/#>`_, like ``python``, ``bash`` or ``text``. For example, you can show this cell:

.. code-block:: bash

    pip install qiskit

In order to do that, you write 

.. code-block:: text

    .. code-block:: bash

        pip install qiskit

``doctest``
-----------

If you want to write Python code cells and check if they work as intended, you can use ``doctest``, whose syntax is:

.. code-block:: text

    .. doctest::

        >>> your_code
        expected_output

That way, ``doctest`` runs ``your_code`` and checks whether the output is ``expected_output``. As an example, you can run this cell:

.. doctest::

    >>> print(3+2)
    5

In order to do that, what you have to write is: 

.. code-block:: text

    .. doctest::

        >>> print(3+2)
        5

.. note::

    For the ``doctest`` cells to appear you need to add the extension ``sphinx.ext.doctest`` to the ``conf.py`` of your repository.
