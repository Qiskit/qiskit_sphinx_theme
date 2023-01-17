=========================
How to add an explanation
=========================

.. include:: ../others/how-to_type.rst

This guide shows how to add an explanation to a Qiskit project repository.

Pre-requisites
==============

This guide assumes your Qiskit project already has a working Sphinx documentation project in a folder called ``docs``. If you don't have it, you can set it up with
:doc:`sphinx-quickstart <sphinx:man/sphinx-quickstart>`.

Inside your ``docs`` folder there should be at least a configuration file called ``conf.py``, a ``explanations`` folder with an ``index.rst`` and in which the explanations will be included.
This ``explanations`` folder should also be referenced as part of a :rst:dir:`sphinx:toctree` in another ``index.rst``, this time in the ``docs`` folder instead of the ``explanations`` one.

In short, the minimum structure of your documentation should be:

.. code-block:: text

    docs/
   |--explanations/
   |       |--index.rst
   |--index.rst 
   |--conf.py

Create a new explanation
========================

In order to create an explanation, go to the ``docs/explanations`` folder of your Qiskit project repository and add a new ``.rst`` file there. In this guide we will assume your explanation is called ``your_explanation.rst``.

Update the page
===============

Once you have created and written your file, you need to update the ``docs/explanations/index.rst`` file so your new explanation appears in the web page.


In particular, you only need to include your new explanation in a :rst:dir:`sphinx:toctree` like this one:

.. code-block:: text

    Section name
    ============

    .. toctree::
        :maxdepth: 1

        existing_explanation_1
        Title of second existing explanation <existing_explanation_2>
        Title of your explanation <your_explanation>

In this example, the title from the first existing explanation (``existing_explanation_1.rst``) is taken directly from it while for ``existing_explanation_2.rst`` and your new explanation
the title is set manually.

It's important to make sure that the indentation of the items inside the :rst:dir:`sphinx:toctree` is of at least three whitespaces.

The section name header needs to be covered by equal signs ``=`` below.