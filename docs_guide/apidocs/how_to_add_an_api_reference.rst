###########################
How to add an API reference
###########################

.. include:: ../others/how-to_type.rst

This guide shows how to add an API reference page to your documentation.

.. include:: ../others/general_pre-requisites.rst

Set up a new project API reference
==================================

If your project doesn't have a :doc:`Sphinx <sphinx:index>`-based API reference yet, you need to add ``"sphinx.ext.autodoc"``,
``"sphinx.ext.autosummary"`` and ``"sphinx.ext.napoleon"`` to the :confval:`sphinx:extensions` variable of ``docs/conf.py``.

Also in ``docs/conf.py``, it is recommended to set the following configuration variables:

* :confval:`sphinx:autosummary_generate` to ``True`` to make sure pages are scanned for autosummary directives.
* :confval:`sphinx:autosummary_generate_overwrite` to ``False`` so that :mod:`sphinx:sphinx.ext.autosummary` doesn't overwrite existing files by generated stub files.
* :confval:`sphinx:autodoc_typehints` to ``"description"`` so the type hints are only shown as part of the function or method instead of in the signature.
* :confval:`sphinx:autodoc_typehints_description_target` to ``"documented_params"`` so that only the types of parameters and return values that are included in the docstring.
* :confval:`sphinx:autoclass_content` to ``"both"`` so when you use the :rst:dir:`sphinx:autoclass` directive you get the docstrings of both the class and the ``__init__()`` method.

So you should have these lines in your ``docs/conf.py``:

.. code-block:: python

    autosummary_generate = True
    autosummary_generate_overwrite = False
    autodoc_typehints = "description"
    autodoc_typehints_description_target = "documented_params"
    autoclass_content = "both"

For more details about other configuration variables check out the documentation pages of :mod:`sphinx:sphinx.ext.autosummary` and :mod:`sphinx:sphinx.ext.autodoc`.

.. note::

    :mod:`sphinx:sphinx.ext.autodoc` default values might be overridden by :mod:`sphinx:sphinx.ext.autosummary`. The latter uses `Jinja template <https://jinja.palletsprojects.com/en/3.1.x/templates/>`_
    files that have to be placed in ``docs/_templates/autosummary``. Those files are:
    
    * ``docs/_templates/autosummary/base.rst``: fallback template.
    * ``docs/_templates/autosummary/module.rst``: for modules.
    * ``docs/_templates/autosummary/class.rst``: for classes.
    * ``docs/_templates/autosummary/function.rst``: for functions.
    * ``docs/_templates/autosummary/attribute.rst``: for attributes.
    * ``docs/_templates/autosummary/method.rst``: for methods.
    
    For more details, check :ref:`Sphinx's official documentation <sphinx:autosummary-customizing-templates>`.

Create a new API reference page
===============================

Now that you have done the basic setup of your API reference you can start creating the pages.
There are two main different types of API reference pages:

* Module pages.
* Class or function pages.

Create a new module page
------------------------

In order to create an API reference page for a module you need to follow these steps:

* Update the docstring of the corresponding ``__init__.py``.
* Create `RST <https://docutils.sourceforge.io/rst.html>`_ file.

Update docstring
^^^^^^^^^^^^^^^^

The first thing you need to do is to go to your module's  ``__init__.py`` and
write just at the start a docstring with `reStructuredText <https://docutils.sourceforge.io/rst.html>`_ (RST) markup like this one:

.. code-block:: python

    r"""
    ################################################
    Name of your module (:mod:`name_of_your_module`)
    ################################################

    .. currentmodule:: name_of_your_module
    
    Description of your module.

    First category
    ==============

    Description of that category.

    .. autosummary::
       :toctree: ../stubs/
       :nosignatures:
       
       SampleClass
       fetch_smalltable_rows

    Second category
    ===============

    Description of that category.

    .. autosummary::
       :toctree: ../stubs/
       :nosignatures:
       
       OtherSampleClass

    """

For more information about how to deal with RST for module docstrings check the :ref:`sphinx-guide`.

Create RST file
^^^^^^^^^^^^^^^

Once you have updated your module's docstring you need to create a file called ``docs/apidocs/name_our_your_module.rst``.
That file should look like this:

.. code-block:: text

    .. automodule:: name_of_your_module
        :no-members:
        :no-inherited-members:
        :no-special-members:

Create a new page for a function or class
-----------------------------------------

In order to create an API reference page for a function or a class, these are the steps:

* Update the docstring.
* Update the module page.

Update the docstring
^^^^^^^^^^^^^^^^^^^^

First you need to find your function or class in the main code of your project. In Qiskit, we are following `the Google Python
Style Guide <https://google.github.io/styleguide/pyguide.html#38-comments-and-docstrings>`_ for docstrings. While this is not standard `RST <https://docutils.sourceforge.io/rst.html>`_,
the :mod:`sphinx:sphinx.ext.napoleon` extension enables :doc:`Sphinx <sphinx:index>` to parse these docstrings.

If your class has public attributes, they should be documented here in an ``Attributes`` section.

.. code-block:: python

    class SampleClass:
    """Summary of class here.

    Longer class information...
    Longer class information...

    Attributes:
        likes_spam: A boolean indicating if we like SPAM or not.
        eggs: An integer count of the eggs we have laid.
    """

    def __init__(self, likes_spam: bool = False):
        """Initializes the instance based on spam preference.

        Args:
          likes_spam: Defines if instance exhibits this preference.
        """
        self.likes_spam = likes_spam
        self.eggs = 0

    def public_method(self):
        """Performs operation blah."""

For functions and methods, document the arguments, return objects and errors in ``Args``,
``Returns`` and ``Raises`` section. 

.. code-block:: python

    def fetch_smalltable_rows(
        table_handle: smalltable.Table,
        keys: Sequence[bytes | str],
        require_all_keys: bool = False,
    ) -> Mapping[bytes, tuple[str, ...]]:
        """Fetches rows from a Smalltable.

        Retrieves rows pertaining to the given keys from the Table instance
        represented by table_handle.  String keys will be UTF-8 encoded.

        Args:
            table_handle: An open smalltable.Table instance.
            keys: A sequence of strings representing the key of each table
            row to fetch.  String keys will be UTF-8 encoded.
            require_all_keys: If True only rows with values set for all keys will be
            returned.

        Returns:
            A dict mapping keys to the corresponding table row data
            fetched. Each row is represented as a tuple of strings. For
            example:

            {b'Serak': ('Rigel VII', 'Preparer'),
            b'Zim': ('Irk', 'Invader'),
            b'Lrrr': ('Omicron Persei 8', 'Emperor')}

            Returned keys are always bytes.  If a key from the keys argument is
            missing from the dictionary, then that row was not found in the
            table (and require_all_keys must have been False).

        Raises:
            IOError: An error occurred accessing the smalltable.
        """

The above code examples were copied from `the Google Python
Style Guide <https://google.github.io/styleguide/pyguide.html#38-comments-and-docstrings>`_. Please
refer to it for more detailed explanations. 


Update the module page
^^^^^^^^^^^^^^^^^^^^^^

In order to update the module page with your classes and functions you need to add them to the ``__init__.py`` of the module(s) in which it's included. This can be done by adding the name to a :rst:dir:`sphinx:toctree` like this one:

.. code-block:: python

    .. autosummary::
       :toctree: ../stubs/
       
       SampleClass
       fetch_smalltable_rows
