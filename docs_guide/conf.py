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
    "qiskit_sphinx_theme",
]

templates_path = ["_templates"]
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]

html_theme = "qiskit-ecosystem"
html_title = project

intersphinx_mapping = {
    "sphinx": ("https://www.sphinx-doc.org/en/master/", None),
    "qiskit": ("https://quantum.cloud.ibm.com/docs/api/qiskit/", None),
    "qiskit-ibm-runtime": ("https://quantum.cloud.ibm.com/docs/api/qiskit-ibm-runtime/", None),
}
