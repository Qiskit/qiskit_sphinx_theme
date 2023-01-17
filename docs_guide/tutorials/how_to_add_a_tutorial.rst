=====================
How to add a tutorial
=====================

.. include:: ../others/how-to_type.rst

This guide shows how to add a tutorial to a Qiskit project repository.

Pre-requisites
==============

This guide assumes your Qiskit project already has a working Sphinx documentation project in a folder called ``docs``. If you don't have it, you can set it up with
:doc:`sphinx-quickstart <sphinx:man/sphinx-quickstart>`.

Inside your ``docs`` folder there should be at least a configuration file called ``conf.py``, a ``tutorials`` folder with an ``index.rst`` and in which the tutorials will be included.
This ``tutorials`` folder should also be referenced as part of a :rst:dir:`sphinx:toctree` in another ``index.rst``, this time in the ``docs`` folder instead of the ``tutorials`` one.

In short, the minimum structure of your documentation should be:

.. code-block:: text

    docs/
   |--tutorials/
   |       |--index.rst
   |--index.rst 
   |--conf.py



Create a new tutorial
=====================

In order to create a tutorial, go to the  ``docs/tutorials`` folder of your Qiskit project repository and add a new ``.ipynb`` or (prefereably) ``.rst`` file there. In this guide we will assume your tutorial is called ``your_tutorial.ipynb`` or ``your_tutorial.rst``.

.. note::

    If the tutorial is an ``ipynb`` file, ``nbsphinx`` needs to be included in the :confval:`sphinx:extensions` variable of ``docs/conf.py`` to convert the ``ipynb`` file into an ``rst`` file during the documentation building process.


Update the page
===============

Once you have created and written your file, you need to update the ``docs/tutorials/index.rst`` file so your new tutorial appears in the web page.

``.rst``
---------

If your tutorial is an ``.rst`` file, add it to a :rst:dir:`sphinx:toctree` like this one:

.. code-block:: text

    Section name
    ============

    .. toctree::
        :maxdepth: 1

        existing_tutorial_1
        Title of second existing tutorial <existing_tutorial_2>
        Title of your tutorial <your_tutorial>

In this example, the title from the first existing tutorial (``existing_tutorial_1.rst``) is taken directly from it while for ``existing_tutorial_2.rst`` and your new tutorial
the title is set manually.

It's important to make sure that the indentation of the items inside the :rst:dir:`sphinx:toctree` is of at least three whitespaces.

The section name header needs to be covered by equal signs ``=`` below.

``.ipynb``
-----------

If your tutorial is an ``.ipynb`` file, add it to a ``nbgallery`` like this one:


.. code-block:: text

    Section name
    ============

    .. nbgallery::
        :maxdepth: 1

        existing_tutorial_1
        Title of second existing tutorial <existing_tutorial_2>
        Title of your tutorial <your_tutorial>

The ``nbgallery`` directive has the same arguments as :rst:dir:`sphinx:toctree`, so the only difference between this case and the ``.rst`` one is
writing the name of the directive.