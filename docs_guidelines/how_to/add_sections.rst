=============================
Add sections to documentation
=============================

This guide shows how to separate your documentation in parts. These parts can be:

* Sections.
* Subsections.
* Subsubsections.
* Paragraphs.

Create sections
===============

In order to create a new section you have to write the name of the section covered below by equal signs ``=``. For example,
you can include this header.

.. code-block:: text

    Section name
    ============

And it would look like this:

Section name
============

Create subsections
==================

You can add a subsection to your section by writing the corresponding name covered below by a sign. This time it's the hyphen, ``-``. So you can include, for example, this subsection header.

.. code-block:: text

    Subsection name
    ---------------

A subsection must be written as part of a section. That means the subsection header can't be shown on its own.

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

A subsubsection must be part of a subsection, so the proper structure would be:

Section name
============
Subsection name
---------------
Subsubsection name
^^^^^^^^^^^^^^^^^^

Create paragraph
================

To add a paragraph, you have to write its title covered below by quotation marks ``"``. For example, you can add this paragraph header:

.. code-block:: text

    Paragraph name
    """"""""""""""

A paragraph must be part of a subsubsection, so the structure is

Section name
============
Subsection name
---------------
Subsubsection name
^^^^^^^^^^^^^^^^^^
Paragraph name
"""""""""""""""


