#########################
How to add an explanation
#########################

.. include:: ../others/how-to_type.rst

This guide shows how to add an explanation to a project repository.

.. include:: ../others/general_pre-requisites.rst

Create a new explanation
========================

In order to create an explanation, go to the ``docs/explanations`` folder of your project repository and add a new ``.rst`` file there. In this guide we will assume your explanation is called ``your_explanation.rst``.

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