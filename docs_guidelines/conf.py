# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Qiskit Documentation Guidelines'
copyright = '2022, Junye Huang, Guillermo Mijares Vilariño'
author = 'Junye Huang, Guillermo Mijares Vilariño'
release = '0.1.0'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = ['jupyter_sphinx', 'sphinx.ext.doctest', 'sphinx.ext.autosummary', 'sphinx.ext.napoleon', 'sphinx_autodoc_typehints']

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'qiskit_sphinx_theme'
html_static_path = ['_static']

# -- Options for Autosummary and Autodoc -------------------------------------

# Note that setting autodoc defaults here may not have as much of an effect as you may expect; any
# documentation created by autosummary uses a template file (in autosummary in the templates path),
# which likely overrides the autodoc defaults.

autosummary_generate = True
autosummary_generate_overwrite = False
autoclass_content = "both"