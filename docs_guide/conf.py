# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

import datetime

project = 'Qiskit Docs Guide'
copyright = f'2022-{datetime.date.today().year}, Qiskit Development Team'
author = 'Qiskit Development Team'
release = '1.0'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = ['jupyter_sphinx', 'sphinx.ext.doctest', 'sphinx.ext.intersphinx', 'sphinx_toolbox.confval']

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'qiskit_sphinx_theme'

# -- Intersphinx configuration ------------------------------------------------

intersphinx_mapping = {
    "qiskit": ("https://qiskit.org/documentation/", None),
    "sphinx": ("https://www.sphinx-doc.org/en/master/", None)
}