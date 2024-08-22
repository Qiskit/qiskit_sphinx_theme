# This code is a Qiskit project.
#
# (C) Copyright IBM 2018, 2023.
#
# This code is licensed under the Apache License, Version 2.0. You may
# obtain a copy of this license in the LICENSE.txt file in the root directory
# of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this
# copyright notice, and modified files need to carry a notice indicating
# that they have been altered from the originals.

import os
import sys

# This allows autodoc to find the `api_example` folder.
sys.path.insert(0, os.path.abspath(".."))

project = "Example Docs"
project_copyright = "2020, Qiskit Development Team"
author = "Qiskit Development Team"
language = "en"
release = "9.99"

html_theme = "qiskit-ecosystem"
html_theme_options = {
    "source_repository": "https://github.com/Qiskit/qiskit_sphinx_theme/",
    "source_branch": "main",
    "source_directory": "example_docs/docs/",
}

# Members of the Qiskit ecosystem should set `sidebar_qiskit_ecosystem_member`
# explicitly in `html_theme_options`. This convoluted code is only set up
# this way to discourage projects who copy this config file from
# unintentionally configuring this option.
if project == "Example Docs":
    html_theme_options["sidebar_qiskit_ecosystem_member"] = True

# This allows including custom CSS and HTML templates.
html_static_path = ["_static"]
templates_path = ["_templates"]

# Sphinx should ignore these patterns when building.
exclude_patterns = [
    "_build",
    "_ecosystem_build",
    "_qiskit_build",
    "_pytorch_build",
    "**.ipynb_checkpoints",
    "jupyter_execute",
]

extensions = [
    "sphinx.ext.napoleon",
    "sphinx.ext.autodoc",
    "sphinx.ext.autosummary",
    "sphinx.ext.mathjax",
    "sphinx.ext.viewcode",
    "jupyter_sphinx",
    "sphinx_copybutton",
    "sphinx_design",
    "nbsphinx",
    "qiskit_sphinx_theme",
]

# Usually this would be something like "%Y/%m/%d", but we need a deterministic value for our
# Playwright visual regression tests.
html_last_updated_fmt = "2020/01/01"

# Most projects will want to set this. It defaults to `{project} {release} documentation`;
# the `documentation` at the end is noisy. Note that you have to use f-strings
# for interpolation, i.e. Sphinx doesn't have built-in interpolation.
html_title = f"{project} {release}"

html_context = {
    # Users of the theme can set prior version numbers. They'll
    # show up in the sidebar under the "Previous Versions" section.
    "version_list": [0.1, 0.2, 0.3],
}

docs_url_prefix = "ecosystem/example_docs"

# When creating a new repo, follow the instructions in this repo's README.md on
# `Enable translations`. Remove this value if you aren't using translations.
translations_list = [
    ("en", "English"),
    ("bn_BN", "Bengali"),
    ("fr_FR", "French"),
]

# This allows RST files to put `|version|` in their file and
# have it updated with the release set in conf.py.
rst_prolog = f"""
.. |version| replace:: {release}
"""

# Options for autodoc. These reflect the values from Terra.
autosummary_generate = True
autosummary_generate_overwrite = False
autoclass_content = "both"
autodoc_typehints = "description"
autodoc_typehints_description_target = "documented_params"

# This adds numbers to the captions for figures, tables,
# and code blocks.
numfig = True
numfig_format = {"table": "Table %s"}

# Settings for Jupyter notebooks.
nbsphinx_execute = "never"
nbsphinx_thumbnails = {
    # Default image for thumbnails.
    "**": "_static/images/logo.png",
}
