# Contributing

First read the overall Qiskit project contributing guidelines. These are all
included in the qiskit documentation:

https://qiskit.org/documentation/contributing_to_qiskit.html

## Contributing to qiskit_sphinx_theme

In addition to the general guidelines there are specific details for
contributing to qiskit_sphinx_theme, these are documented below.

------
## Folder Structure

There are a few important subfolders to be aware of:

### `/qiskit_sphinx_theme`
This subfolder contains the raw html and css files that are used to set the framework for Qiskit documentation web pages. The files in this folder will set the styles when a project calls the `qiskit_sphinx_theme` in its `conf.py`, unless the project overrides the style with their own files.

E.g. if a qiskit project (with the `qiskit_sphinx_theme` installed) wants to override any of the themes files (such as the `layout.html`) that the `qiskit_sphinx_theme` provides it needs to have its own version of that file (e.g. `layout.html`) stored in its `docs/_templates` folder.

### `/docs`
This subfolder contains a scaled down version of the Sphinx build that builds the documentation for the Qiskit repos. It pulls styles from the `/qiskit_sphinx_theme` subfolder. You can check any changes you are making to the `qiskit_sphinx_theme` by building the documentation (see running locally section) and opening the html files generated in `/docs/_build/html`.

### `/docs/sphinx_guide`
This subfolder contains some example `.rst` files that show how to implement specific Sphinx features such as class documentation, panel layouts, images etc.

------
## Run locally

We use [Tox](https://tox.wiki/en/latest/), which you will need to install globally (e.g. using [`pipx`](https://pypa.github.io/pipx/)).

* Build `docs/`: `tox -e py`
* Build `docs_guide`: `tox -e docs-guide`
* Run doctests: `tox -e doctest`
