===============
Add a tutorial
===============

This guide shows how to add a tutorial to a Qiskit repository.

Create the tutorial
===================

In order to create a tutorial, you have to go to the  ``docs/tutorials`` folder of your Qiskit repository and add a new ``.ipynb`` or (prefereably) ``.rst`` file there. In this guide we will assume your tutorial is called ``your_tutorial.ipynb`` or ``your_tutorial.rst``.

.. note::

    If the tutorial is an ``ipynb`` file, ``nbsphinx`` has to be included in the ``extensions`` variable of ``docs/conf.py``.


Update the page
===============

Once you have created and written your file, you have to update the ``docs/tutorials/index.rst`` file so your new tutorial appears in the web page.


Update existing section
-----------------------

``.rst``
^^^^^^^^^

If you want to update an existing section, you only need to add this line to the corresponding ``nbgallery``:

.. code-block:: text

    Title of your tutorial <your_tutorial>

Make sure your tutorial has the same indentation as the other tutorials from the ``toctree``.

``.ipynb``
^^^^^^^^^^^

If you want to update an existing section, you only need to add this line to the corresponding ``nbgallery``:

.. code-block:: text

    your_tutorial

Make sure your tutorial has the same indentation as the other tutorials from the ``nbgallery``.

Create new section
------------------

``.rst``
^^^^^^^^^

If instead of updating an existing section you want to create a new one, you have to write this:

.. code-block:: text

    Section name
    ============

    .. toctree::
        :maxdepth: 1

        Title of your tutorial <your_tutorial>

The section name must be covered by the equal signs ``=`` below.

``.ipynb``
^^^^^^^^^^^

If instead of updating an existing section you want to create a new one, you have to write this:

.. code-block:: text

    Section name
    ============

    .. nbgallery::

        your_tutorial

The section name must be covered by the equal signs ``=`` below.