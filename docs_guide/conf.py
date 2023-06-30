# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

import datetime

project = "Qiskit Docs Guide"
copyright = f"2022-{datetime.date.today().year}, Qiskit Development Team"
author = "Qiskit Development Team"
release = "1.0"

extensions = [
    "jupyter_sphinx",
    "sphinx.ext.doctest",
    "sphinx.ext.intersphinx",
    "sphinx_toolbox.confval",
]

templates_path = ["_templates"]
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]

html_theme = "_qiskit_furo"

intersphinx_mapping = {
    "sphinx": ("https://www.sphinx-doc.org/en/master/", None),
    "qiskit": ("https://qiskit.org/documentation/", None),
    "qiskit-ibm-runtime": ("https://qiskit.org/documentation/partners/qiskit_ibm_runtime/", None),
}
