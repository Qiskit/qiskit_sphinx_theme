# Contributing

First read the overall Qiskit project contributing guidelines. These are all
included in the qiskit documentation:

https://qiskit.org/documentation/contributing_to_qiskit.html

## Contributing to qiskit_sphinx_theme

In addition to the general guidelines there are specific details for
contributing to qiskit_sphinx_theme, these are documented below.

# Folder Structure

There are a few important subfolders to be aware of:

## `/qiskit_sphinx_theme`
This subfolder contains the raw html and css files that are used to set the framework for Qiskit documentation web pages. The files in this folder will set the styles when a project calls the `qiskit_sphinx_theme` in it's `conf.py`, unless the project overrides the style with their own files.

E.g. if a qiskit project (with the `qiskit_sphinx_theme` installed) wants to override the `layout.html` that the `qiskit_sphinx_theme` provides it needs to have it's own `layout.html` stored in its `docs/_templates` folder.

## `/docs`
This subfolder contains a scaled down version fo the Sphinx build that builds the documentation for the Qiskit repos. It pulls styles from the `/qiskit_sphinx_theme` subfolder. You can check any changes you are making to the `qiskit_sphinx_theme` by building the documentation (see running locally section) and opening the html files generated in `/docs/_build/html`

## `/docs/core_pages`
This subfolder contains the `.rst` files that are not tied specifically to a single Qiskit repo, but are relevant to all. This includes the landing page, the contributing guidelines etc.

## `/docs/sphinx_guide`
This subfolder contains some example `.rst` files that show how to implement specific Sphinx features such as class documentaition, panels layouts, images etc.

# Run locally

1. Set up a python environment to work in
2. run `pip install .`
3. run `sphinx-build -b html docs/ docs/_build/html` to build the documentation. This will create the `/docs/_build` subfolder where you can see the html files generated based on the `.rst` files in the `docs` folder and the styles pulled from the `qiskit_sphinx_theme`.
