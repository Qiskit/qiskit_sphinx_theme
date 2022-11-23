=================
reStructuredText
=================

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
`Sphinx <https://www.sphinx-doc.org/en/master/>`_, the documentation generator used in Qiskit,
so any other language implies converting the files to RST, which is generally more inefficient than using RST from the start.

We are also using RST (``.rst`` files) over other options like `Jupyter notebooks <https://jupyter.org/>`_ (``.ipynb`` files) or `Markdown <https://daringfireball.net/projects/markdown/>`_ (``.md`` files) for our guides and tutorials
because RST, unlike the others, allows to properly cross-reference to other parts of your documentation without having to use the URL of the deployed page, so if a page changes places,
the documentation will automatically change accordingly. That means documentation maintenance is much easier with RST.
A strong functionality of Jupyter notebooks is the ability to run code cells, but, while Markdown doesn't have this functionality, RST does thanks to the
`jupyter_sphinx <https://jupyter-sphinx.readthedocs.io/en/latest/>`_ extension.