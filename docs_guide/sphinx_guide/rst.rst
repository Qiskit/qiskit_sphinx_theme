################
reStructuredText
################

.. include:: ../others/explanation_type.rst

What is reStructuredText?
=========================

`reStructuredText <https://docutils.sourceforge.io/rst.html>`_ (RST) is a lightweight markup language,
that is, an easy to read language that formats plaintext documents according to a set of tags. It was conceived as a
revision of the `StructuredText <https://zopestructuredtext.readthedocs.io/en/latest/>`_ and `Setext <https://docutils.sourceforge.io/mirror/setext.html>`_ markup languages.
It enables the creation of web pages and documentation from, for example, Python docstrings. 

The reStructuredText parser
is part of `Docutils <https://docutils.sourceforge.io/index.html>`_, a Python-based open-source text processing system that converts plaintext
into formats like `HTML <https://html.spec.whatwg.org/multipage/>`_, `LaTeX <https://www.latex-project.org/>`_, `man-pages <https://manpages.bsd.lv/mdoc.html#man_pages>`_ (manual pages),
`OpenDocument <https://opendocumentformat.org/>`_ or `XML <https://www.w3.org/TR/xml/>`_ (Extensible Markup Language).


Why do we use reStructuredText in Qiskit?
=========================================

The main reason we are using reStructuredText in Qiskit is that it is the native language of
`Sphinx <https://www.sphinx-doc.org/en/master/>`_, the documentation generator used in Qiskit.
Using other languages requires converation to RST, which is generally less efficient than using RST from the start and can occasionally cause `unintended formatting issues <https://github.com/spatialaudio/nbsphinx/issues/301>`_.

Because RST is the native language for Sphinx, comparing with other options like `Jupyter notebooks <https://jupyter.org/>`_ (``.ipynb`` files) or `Markdown <https://daringfireball.net/projects/markdown/>`_ (``.md`` files), writing documentation in RST has the great benefit of automatic cross-referencing to other sections or files within the documentation. So if a page has been moved, the documentation will automatically change accordingly. And if a cross-reference link is broken, it can be caught in the docs building process. All of these means documentation maintenance is much easier with RST. 

Jupyter notebooks have one functionality that is better than RST, that is the ease of running code cells. In addition, our users are familiar with using Jupyter notebooks to execute codes. Therefore, tutorials at the moment are mostly written in Jupyter notebooks. However, in addition to no cross-referencing, Jupyter notebooks are difficult to maintain because it is not written in plaintext. It is hard to review changes. 

In the future, we hope to use only RST for documentation (including tutorials). There are ways to execute Python code within RST (using `doctest <https://www.sphinx-doc.org/en/master/usage/extensions/doctest.html>`_ or `jupyter-sphinx <https://jupyter-sphinx.readthedocs.io/en/latest/>`_ extension) and expose output Jupyter notebooks for users to download while Markdown doesn't offer any of these options.