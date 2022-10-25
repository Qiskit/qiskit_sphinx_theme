=======================================================
Create a new documentation project of a Qiskit package.
=======================================================

In this tutorial you will create a new documentation project for a Qiskit repository. For this purpose you will use Qiskit's Sphinx theme, ``qiskit_sphinx_theme``. 


Background information
=======================

Before you dive into the creation of the docuementation project, it's important to know what reStructuredText and Sphinx are.

reStructuredText (RST) is a lightweight markup language, that is, an easy to read language that formats plaintext documents according to a set of tags. It enables the creation of web pages and documentation from, for example, Python docstrings.

Sphinx is a documentation generator that converts RST files to formats like HTML, LaTeX, ePub, Texinfo, manual pages or plain text. It is written in Python. The ``qiskit_sphinx_theme`` will focus on converting RST to HTML pages.

Install the ``qiskit_sphinx_theme``
===================================

In order to use use the ``qiskit_sphinx_theme`` you need to first install it. You can do that with ``pip`` by running this:

.. code-block:: bash

    pip install qiskit-sphinx-theme

.. warning::

    You should not overwrite the ``qiskit_sphinx_theme``.


Create the documentation in your repository
===========================================

In order to crete a documentation folder you can use `sphinx-quickstart <https://www.sphinx-doc.org/en/master/man/sphinx-quickstart.html>`_. It asks some questions and creates a functional documentation folder according to your answers.
You can use ``sphinx-quickstart`` by going to the root directory of your repository and running this command.

.. code-block:: bash

    sphinx-quickstart docs

So the new folder will be called ``docs``. Then you will get this output:

.. code-block:: bash
  
    Please enter values for the following settings (just press Enter to
    accept a default value, if one is given in brackets).

    Selected root path: docs

    You have two options for placing the build directory for Sphinx output.
    Either, you use a directory "_build" within the root path, or you separate
    "source" and "build" directories within the root path.
    > Separate source and build directories (y/n) [n]:

In this case, you will give the default answer, that is, the one between brackets (``n``), so you will not separate the ``source`` and ``build`` directories. To do this you only have to press ENTER.


.. code-block:: bash

    The project name will occur in several places in the built documentation.
    > Project name: Qiskit X
    > Author name(s): Qiskit X Development Team
    > Project release []: 0.1.0

This time you have to give non-default answers. The project name will be that of your repository. That name will have the form "Qiskit X", where "X" can be "Machine Learning" or "Nature", for example. For the authors, you will refer to the development team of your project.

.. code-block:: bash

    If the documents are to be written in a language other than English,
    you can select a language here by its language code. Sphinx will then
    translate text that it generates into that language.

    For a list of supported codes, see
    http://sphinx-doc.org/config.html#confval-language.
    > Project language [en]:

Here the language will be English, that is, the default.

.. code-block:: bash

    Creating file ./docs/conf.py.
    Creating file ./docs/index.rst.
    Creating file ./docs/Makefile.
    Creating file ./docs/make.bat.

    Finished: An initial directory structure has been created.

The new folder will consist of:

* ``index.rst``: the RST file that will make up the home page when built as HTML.
* ``conf.py``: a file that includes all the Sphinx configuration settings.
* ``Makefile`` (or ``make.bat`` for Windows): files that enable you to build documentation using ``make``.
* ``_templates``: a folder for your own HTML templates (now empty).
* ``_static``: a folder for static files like images (now empty).
* ``_build``: a folder for built documentation (now empty).

Even though you have created a working Sphinx documentation folder, you are not using the ``qiskit_sphinx_theme`` yet. In order to do that, you have to open ``conf.py``
and change the value of the variable ``html_theme`` from ``'alabaster'`` to ``'qiskit_sphinx_theme'``.

Structure your documentation
============================

In Qiskit we are following the `Diataxis <https://diataxis.fr/>`_ documentation framework, that means that our documentation has to be separated into:

* Tutorials.
* How-to guides.
* API reference.
* Explanations.

In order to do that, you have to create 4 new folders inside ``docs``, that you will call ``tutorials``, ``how_to``, ``apidocs`` and ``explanations``. Inside each one of them, a file called ``index.rst`` must be created.

Apart from that, you should add your release notes to ``docs`` as a file called ``release_notes.rst`` and a getting started guide ``getting_started.rst``.

Sidebar
=======

Now that you have all the needed ``.rst`` files, you can create a sidebar for your documentation page. This can be done by linking to the files with a `toctree <https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#directive-toctree>`_
in ``docs/index.rst``.  Your ``index.rst`` should look like this:

.. code-block:: text

    =====================================
    Welcome to Qiskit X's documentation!
    =====================================

    Overview
    ========

    Explain your package here.


    .. toctree::
    :hidden:

    Overview <self>
    Getting Started <getting_started>
    Tutorials <tutorials/index>
    How-to Guides <how_to/index>
    API Reference <apidocs/index>
    Explanations <explanations/index>
    Release Notes <release_notes>
    GitHub <https://github.com/Qiskit/qiskit_x>

