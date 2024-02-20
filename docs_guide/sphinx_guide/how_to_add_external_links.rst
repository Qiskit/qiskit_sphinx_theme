.. _add_external_links:

#########################
How to add external links
#########################

.. include:: ../others/how-to_type.rst

This guide shows how to include links to pages outside your documentation.

There are two types of files

``.rst``
=========

In order to link to an external page you have to write ```text of your link <your_url>`_``. For example, you can link to `IBM Quantum documentation <https://docs.quantum.ibm.com>`_ by writing:

.. code-block:: text

    `IBM Quantum documentation <https://docs.quantum.ibm.com>`_

.. note::

    You can also use :mod:`sphinx:sphinx.ext.intersphinx` to link to pages from other project's documentation using the cross-reference syntax.
    For more information about cross-referencing and using :mod:`sphinx:sphinx.ext.intersphinx`, check :ref:`cross-reference`.

``.ipynb``
===========

If your file is a Jupyter notebook, what you have to write to link to a page is ``[text of your link](your_url)``. If you want to link to `IBM Quantum Documentation <https://docs.quantum.ibm.com>`_ you can write:

.. code-block:: text

    [Qiskit's page](https://docs.quantum.ibm.com)


.. warning::

    Avoid including backquotes ````` as part of the text of your link. Qiskit's documentation uses `nbsphinx <https://nbsphinx.readthedocs.io/en/0.7.1/index.html>`_ to convert the ``.ipynb`` files to ``.rst`` and then to ``HTML``.
    So, even though the links will work and look fine in a Jupyter notebook, they will not format properly in the actual documentation because ``.rst`` doesn't admit the backquotes.
