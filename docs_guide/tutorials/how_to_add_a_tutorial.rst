#####################
How to add a tutorial
#####################

.. include:: ../others/how-to_type.rst

This guide shows how to add a tutorial to your project repository.

.. include:: ../others/general_pre-requisites.rst

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

The ``nbgallery`` directive has the same arguments as :rst:dir:`sphinx:toctree`, so the only
difference between this case and the ``.rst`` one is writing the name of the directive.