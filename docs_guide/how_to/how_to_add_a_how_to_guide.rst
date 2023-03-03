#########################
How to add a how-to guide
#########################

.. include:: ../others/how-to_type.rst

This guide shows how to add a how-to guide to a project repository.

.. include:: ../others/general_pre-requisites.rst

Create a new guide
==================

In order to create a how-to guide, go to the ``docs/how_to`` folder of your project repository and add a new ``.rst`` file there. In this guide we will assume your guide is called ``your_guide.rst``.

Update the page
===============

Once you have created and written your file, you need to update the ``docs/how_to/index.rst`` file so your new guide appears in the web page.

In particular, you only need to include your new guide in a :rst:dir:`sphinx:toctree` like this one:

.. code-block:: text

    Section name
    ============

    .. toctree::
       :maxdepth: 1

       existing_guide_1
       Title of second existing guide <existing_guide_2>
       Title of your guide <your_guide>

In this example, the title from the first existing guide (``existing_guide_1.rst``) is taken directly from it while for ``existing_guide_2.rst`` and your new guide
the title is set manually.

It's important to make sure that the indentation of the items inside the :rst:dir:`sphinx:toctree` is of at least three whitespaces.