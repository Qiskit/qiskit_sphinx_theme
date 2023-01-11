============
Create lists
============

This guide shows how to create a list in your documentation.

There are several types of lists:

* unordered lists.
* ordered lists.
* nested lists.

.. note::

    Lists should be separated from the rest of the text by line breaks.

Unordered lists
===============

You can create an unordered list by writing an asterisk ``*`` followed by an space and the items on your list:

.. code-block:: text

    * Item 1
    * Item 2
    * Item 3

The output of this would be:

* Item 1
* Item 2
* Item 3


Ordered lists
=============

There are several ways to include numbered lists in your documentation. You can use the following numbering methods:

* Arabic: 1, 2, 3, 4, ...
* Lower roman: i, ii, iii, iv, ...
* Upper roman: I, II, III, IV, ...
* Lower alpha: a, b, c, d, ...
* Upper alpha: A, B, C, D, ...

And you can present them the following ways:

* Followed by a period. E.g., 1.
* Surrounded by parentheses. E.g., (a)
* parenthesis on the right. E.g., i)

You can pick any of these numbering types and presentations but you have to keep the same ones for the remainder of the list. The output will always be arabic numbers followed by a period. The numbers have to be written in order but don't have to start with 1. For example, you can write:

.. code-block:: text

    b) b
    c) c
    d) d

And the output is:

b) b
c) c
d) d


Automatic ordering
------------------

You can make the numbering automatic if you write a hashtag ``#`` instead of the number/letter.  For example:

.. code-block:: text

    (XX) XX
    (#) #
    (#) #

The output of this list is:

(XX) XX
(#) #
(#) #

Nested lists
============

You can include a list inside a list if you add a 4-space indentation or bigger to the items in the nested list. The nested lists don't have to follow the format from the parent list and you can even mix oredered and unordered lists. For example:

.. code-block:: text

    #. Item
        i) nested item 1
        #) nested item 2
    #. Item
        * nested item
        * nested item
    #. Item

The output is:

#. Item
    i) nested item 1
    #) nested item 2
#. Item
    * nested item
    * nested item
#. Item