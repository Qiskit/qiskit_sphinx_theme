=========================
Add code to documentation
=========================

This guide shows how to include code in your documentation.

Pre-requisites
==============

This guide assumes your Qiskit project already has a working Sphinx documentation project in a folder called ``docs``. If you don't have it, you can set it up with
:doc:`sphinx-quickstart <sphinx:man/sphinx-quickstart>`.

There are two ways to have code in your docs:

* Inline code.
* Code in a separate block.

Inline code
===========

If you want to include a snippet of code inside your text, you only need to surround your code with pairs of backquotes, that is,  ````your_code````. So if you want to say that the output of ``2>3`` is ``False``, what you write is:

.. code-block:: text

    the output of ``2>3`` is ``False``

Code blocks
===========

There are several ways to include code cells in your documentation:

* Executable cells with ``jupyter-execute``.
* Non-executable cells with :rst:dir:`sphinx:code-block`.
* Testable code cells with :mod:`doctest <sphinx.ext.doctest>`.

Executable cells
-----------------

If you want to run Python code that includes visualization, you can use ``jupyter-execute`` to include cells that are executed in a Jupyter kernel and show the output of that code in your documentation. The syntax is:


.. code-block:: text

    .. jupyter-execute::

        your_code

For example, you can write this:

.. code-block:: text

    .. jupyter-execute::

        from qiskit import QuantumCircuit

        qc = QuantumCircuit(2)
        qc.h(0)
        qc.cx(0,1)
        qc.draw('mpl')

The output would be this cell:

.. jupyter-execute::

    from qiskit import QuantumCircuit

    qc = QuantumCircuit(2)
    qc.h(0)
    qc.cx(0,1)
    qc.draw('mpl')


.. note::

    Even though ``jupyter-execute`` can be used for cells without any visualization, it makes the documentation building process
    more complex, so it is recommended to use :mod:`doctest <sphinx.ext.doctest>` instead. See `this page <https://github.com/Qiskit/qiskit-terra/issues/7661>`_ for more details.

.. note::

    For the ``jupyter-execute`` cells to appear you need to add ``jupyter_sphinx`` to the :confval:`sphinx:extensions` variable in the ``docs/conf.py`` of your repository.



Non-executable cells
--------------------

There are some situations in which executing the code is not convenient, such as when:

* The code you are showing is not written in Python but other languages like reStructuredText, YAML, Markdown or Rust.
* The code requires connecting to a provider.
* The code takes too long to run.

In those cases, you can use :rst:dir:`sphinx:code-block`, whose syntax is:

.. code-block:: text

    .. code-block:: language

        your_code

You can pick as ``language`` any of the short names of the lexers supported by `Pygments <https://pygments.org/docs/lexers/#>`_, like ``python``, ``bash`` or ``text``.
For example, you can write this:

.. code-block:: text

    .. code-block:: python

        from qiskit import QuantumCircuit

        qc = QuantumCircuit(1)
        qc.x(0)


And the output will look like this:

.. code-block:: python

    from qiskit import QuantumCircuit

    qc = QuantumCircuit(1)
    qc.x(0)


Testable cells
--------------

If you want to write Python code cells that don't include visualizations and check if they work as intended, you have two different options:

* :rst:dir:`sphinx:doctest`
* :rst:dir:`sphinx:testcode` and :rst:dir:`sphinx:testoutput`

.. note::

    For the :rst:dir:`sphinx:doctest`, :rst:dir:`sphinx:testcode` and :rst:dir:`sphinx:testoutput` cells to appear you need to add the extension ``sphinx.ext.doctest`` to the ``conf.py`` of your repository.

:rst:dir:`sphinx:doctest`
^^^^^^^^^^^^^^^^^^^^^^^^^^

If you want both input and output in the same code cell, you can use :rst:dir:`sphinx:doctest`, whose syntax is:

.. code-block:: text

    .. doctest::

        >>> your_code
        expected_output

That way, :rst:dir:`sphinx:doctest` runs ``your_code`` and checks whether the output is ``expected_output``.
As an example, you can write this:

.. code-block:: text

    .. doctest::

        >>> print(3+2)
        5

Then this cell would be run:

.. doctest::

    >>> print(3+2)
    5

:rst:dir:`sphinx:testcode` and :rst:dir:`sphinx:testoutput`
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If you prefer to keep the code to test from the expected output, you can put the former in a :rst:dir:`sphinx:testcode` cell and the latter in a :rst:dir:`sphinx:testoutput` cell.
The syntax would then be:

.. code-block:: text

    .. testcode::
    
        your_code
    
    .. testoutput::
    
        expected_output


For example, if you run this:

.. code-block:: text

    .. testcode::

        print(3+2)

    .. testoutput::

        5

The output is then:

.. testcode::

    print(3+2)

.. testoutput::

    5


Run the tests
^^^^^^^^^^^^^^

In order to run the tests, you can use :doc:`sphinx-build <sphinx:man/sphinx-build>` by setting the builder (``-b``)
to ``doctest``:

.. code-block:: bash

    sphinx-build -b doctest your_files output_file_path

For example, to run the tests from the ``docs_guidelines`` folder and put the ``output.txt`` file in ``docs_guidelines/_build`` you can run:

.. code-block:: bash

    sphinx-build -b doctest docs_guidelines docs_guidelines/_build

And the output will be:

.. code-block:: text

    Document: how_to/add_code
    -------------------------
    1 items passed all tests:
       2 tests in default
    2 tests in 1 items.
    2 passed and 0 failed.
    Test passed.

    Doctest summary
    ===============
        2 tests
        0 failures in tests
        0 failures in setup code
        0 failures in cleanup code
    build succeeded.

    Testing of doctests in the sources finished, look at the results in docs_guidelines/_build/output.txt.

Add setup cells
^^^^^^^^^^^^^^^

For both :rst:dir:`sphinx:doctest` and :rst:dir:`sphinx:testcode` - :rst:dir:`sphinx:testoutput` you can also add a cell that is executed before the test but not shown. This :rst:dir:`sphinx:testsetup` cell can be useful,
for example, to import a package or define a function that will be used for one or more tests.

The general syntax is:

.. code-block:: text

    .. testsetup::
    
        setup_code
    
    .. testcode::
    
        your_code
    
    .. testoutput::
    
        expected_output

For example, you can run this:

.. code-block:: text

    .. testsetup::

        def hello():
            print("Hello")

    .. doctest::

        >>> hello()
        "Hello"

And the result is:

.. testsetup::

    def hello():
        print("Hello")

.. doctest::
    
    >>> hello()
    Hello