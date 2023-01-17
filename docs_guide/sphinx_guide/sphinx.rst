======
Sphinx
======

.. include:: ../others/explanation_type.rst

What is Sphinx?
===============

`Sphinx <https://www.sphinx-doc.org/en/master/>`_ is a documentation generator that converts `reStructuredText <https://docutils.sourceforge.io/rst.html>`_ (RST) files to formats like `HTML <https://html.spec.whatwg.org/multipage/>`_, `LaTeX <https://www.latex-project.org/>`_, `ePub <https://www.w3.org/publishing/epub32/>`_, `Texinfo <https://www.gnu.org/software/texinfo/>`_, manual pages or plain text.
It is written in Python. Some of its main characteristics are:

* Ability to cross-reference to pages corresponding to functions, classes, attributes, parameters and similar, creating links with semantic markup.
* Intuitive hierarchical structure for documentation trees.
* Index pages generated automatically.
* Automatic code highlighting with `Pygments <https://pygments.org/>`_.
* Customizable HTML themes.


Why do we use Sphinx in Qiskit?
===============================

One of the main reasons we use Sphinx is that it creates API reference pages automatically from the Python code, which makes up
most of Qiskit's code, so documentation is easier to create and mantain. Apart from that, Sphinx allows you to cross-reference to pages inside the documentation instead of using the
URL from the deployed page, so you reduce the risk of broken links to a minimum when parts of the documentation are moved to a different place.

Sphinx also offers a wide array of extensions that make creating docs much easier, like the following:

* `instersphinx <https://www.sphinx-doc.org/en/master/usage/extensions/intersphinx.html>`_, that enables you to link to other projects, like other Qiskit repositories.
* `napoleon <https://www.sphinx-doc.org/en/master/usage/extensions/napoleon.html>`_, that lets you use `NumPy <https://numpydoc.readthedocs.io/en/latest/format.html>`_ and `Google <https://google.github.io/styleguide/pyguide.html#383-functions-and-methods>`_ style docstrings, simpler than using `pure RST <https://sphinx-rtd-tutorial.readthedocs.io/en/latest/docstrings.html>`_.
* `autodoc <https://www.sphinx-doc.org/en/master/usage/extensions/autodoc.html>`_, that automatically creates module pages.
* `autosummary <https://www.sphinx-doc.org/en/master/usage/extensions/autosummary.html>`_, that creates summary tables for functions, methods, attributes or parameters from their source code, avoiding duplication of content.
* `reno.sphinxext <https://docs.openstack.org/reno/2.1.1/sphinxext.html>`_, that incorporates release notes to the documentation automatically.
* `jupyter_sphinx <https://jupyter-sphinx.readthedocs.io/en/latest/>`_, that allows you to run Jupyter cells.


Another Sphinx characteristic we use extensively is the ability to customize an HTML theme, so we have our own theme called
`qiskit_sphinx_theme <https://github.com/Qiskit/qiskit_sphinx_theme>`_, that gives `qiskit.org <https://qiskit.org>`_ and any local built Qiskit docs their
characteristic appearance.