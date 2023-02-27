####################################
How to add sections to documentation
####################################

.. include:: ../others/how-to_type.rst

This guide shows how to organize your documents in different parts: sections, subsections, and so on. 

.. include:: ../others/general_pre-requisites.rst

Create sections, subsections and so on
======================================

You can organize your documents into:

* Sections.
* Subsections.
* Subsubsections.
* Paragraphs.

Section headers are created by underlining (and optionally overlining) the section title with
a punctuation character, at least as long as the text:

.. code-block:: rst 

   Section name
   ============

Normally, there are no heading levels assigned to certain characters as the structure is
determined from the succession of headings. Here, we follow the convention is used in `Python
Developer’s Guide for documenting <https://devguide.python.org/documentation/markup/#sections>`_
with slight modification:

* ``#`` with overline, for page title
* ``=`` for sections
* ``-`` for subsections
* ``^`` for subsubsections
* ``"`` for paragraphs

Code:

.. code-block:: rst 
   
   ##########
   Title name
   ##########

   Some text

   Section name
   ============

   Some text

   Subsection name
   ---------------
   
   Some text

   Subsubsection name
   ^^^^^^^^^^^^^^^^^^
   
   Some text

   Paragraph name
   """"""""""""""

   Some text

Output:

##########
Title name
##########

Some text

Section name
============

Some text

Subsection name
---------------

Some text

Subsubsection name
^^^^^^^^^^^^^^^^^^

Some text

Paragraph name
""""""""""""""

Some text