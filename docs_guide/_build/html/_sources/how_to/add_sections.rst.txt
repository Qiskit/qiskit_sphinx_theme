=============================
Add sections to documentation
=============================

This guide shows how to separate your documents in parts. 

Pre-requisites
==============

This guide assumes your Qiskit project already has a working Sphinx documentation project in a folder called ``docs``. If you don't have it, you can set it up with
:doc:`sphinx-quickstart <sphinx:man/sphinx-quickstart>`.

You can organize your documents into:

* Sections.
* Subsections.
* Subsubsections.
* Paragraphs.

Create sections
===============

In order to create a new section you can write the name of the section covered below by equal signs ``=``. For example,
you can include this header:

.. code-block:: text

    Section name
    ============

And it would look like this:

Section name
============

Create subsections
==================

You can add a subsection to your section by writing the corresponding name covered below by a sign. This time it's the hyphen, ``-``. So you can include, for example, this subsection header:

.. code-block:: text

    Subsection name
    ---------------

A subsection needs to be written as part of a section. That means the subsection header can't be shown on its own.

Section name
============
Subsection name
---------------

Create subsubsections
=====================

If you want to add a subsubsection to a section of your document, you can do so by writing its title covered below by carets, ``^``. For example, you can add this subsubsection header:

.. code-block:: text

    Subsubsection name
    ^^^^^^^^^^^^^^^^^^

A subsubsection needs to be part of a subsection, so the proper structure would be:

Section name
============
Subsection name
---------------
Subsubsection name
^^^^^^^^^^^^^^^^^^

Create paragraphs
==================

To add a paragraph, you have to write its title covered below by quotation marks ``"``. For example, you can add this paragraph header:

.. code-block:: text

    Paragraph name
    """"""""""""""

A paragraph needs to be part of a subsubsection, so the structure is

Section name
============
Subsection name
---------------
Subsubsection name
^^^^^^^^^^^^^^^^^^
Paragraph name
"""""""""""""""

.. note::

    Actually the heading levels are not assigned to any character in particular, but it is recommended to follow the convention established
    in this guide to make our documentation more consistent.


