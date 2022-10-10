==================
Add an explanation
==================

This guide shows how to add an explanation to a Qiskit repository.

Create the explanation
======================

In order to create an explanation, you have to go to the  ``docs/explanations`` folder of your Qiskit repository and add a new ``.rst`` file there. In this guide we will assume your explanation is called ``your_explanation.rst``.

Update the page
===============

Once you have created and written your file, you have to update the ``docs/explanations/index.rst`` file so your new explanation appears in the web page.


Update existing section
-----------------------

If you want to update an existing section, you only need to add this line to the corresponding ``toctree``:

.. code-block:: text

    Title of your explanation <your_explanation>

Make sure your explanation has the same indentation as the other explanations from the ``toctree``.

Create new section
------------------

If instead of updating an existing section you want to create a new one, you have to write this:

.. code-block:: text

    Section name
    ============

    .. toctree::
        :maxdepth: 1

        Title of your explanation <your_explanation>

The section name must be covered by the equal signs ``=`` below.