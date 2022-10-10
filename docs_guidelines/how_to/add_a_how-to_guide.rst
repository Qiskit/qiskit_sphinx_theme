==================
Add a how-to guide
==================

This guide shows how to add a how-to guide to a Qiskit repository.

Create the guide
================

In order to create a how-to guide, you have to go to the  ``docs/how_to`` folder of your Qiskit repository and add a new ``.rst`` file there. In this guide we will assume your guide is called ``your_guide.rst``.

Update the page
===============

Once you have created and written your file, you have to update the ``docs/how_to/index.rst`` file so your new guide appears in the web page.


Update existing section
-----------------------

If you want to update an existing section, you only need to add this line to the corresponding ``toctree``:

.. code-block:: text

    Title of your guide <your_guide>

Make sure your guide has the same indentation as the other guides from the ``toctree``.

Create new section
------------------

If instead of updating an existing section you want to create a new one, you have to write this:

.. code-block:: text

    Section name
    ============

    .. toctree::
        :maxdepth: 1

        Title of your guide <your_guide>

The section name must be covered by the equal signs ``=`` below.