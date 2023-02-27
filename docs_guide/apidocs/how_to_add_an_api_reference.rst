###########################
How to add an API reference
###########################

.. include:: ../others/how-to_type.rst

This guide shows how to add an API reference page to your documentation.

.. include:: ../others/general_pre-requisites.rst

Create a new API reference
==========================

In order to create an API reference, you need to find the function or class for which you want to
write the reference in the main code of your project. In Qiskit, we are following `the Google Python
Style Guide <https://google.github.io/styleguide/pyguide.html#38-comments-and-docstrings>`_ for
docstrings. 

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


Update the page
===============

In order to update the page you need to add your class or function to the ``__init__.py`` of the module(s) in which it's included. This can be done by adding the name to a :rst:dir:`sphinx:toctree` like this one:

.. code-block:: python

    .. autosummary::
       :toctree: ../stubs/
       
       SampleClass
       fetch_smalltable_rows
