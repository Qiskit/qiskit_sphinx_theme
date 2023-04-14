# This code is part of Qiskit.
#
# (C) Copyright IBM 2018.
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

# This allows autodoc to find the `api_example` folder and
# for us to register our `docs.language_utils` extension.
sys.path.insert(0, os.path.abspath(".."))

project = 'Qiskit sphinx theme'
project_copyright = '2020, Qiskit Development Team'
author = 'Qiskit Development Team'
language = "en"
release = "9.99"

# This allows including custom HTML templates.
templates_path = ["_templates"]
html_static_path = ["_static"]
html_css_files = ["gallery.css"]

# Sphinx should ignore these patterns when building.
exclude_patterns = ['_build', '**.ipynb_checkpoints']

extensions = [
    'sphinx.ext.napoleon',
    'sphinx.ext.autodoc',
    'sphinx.ext.autosummary',
    'sphinx.ext.mathjax',
    'sphinx.ext.viewcode',
    'sphinx.ext.extlinks',
    'jupyter_sphinx',
    'sphinx_design',
    "nbsphinx",
]

html_last_updated_fmt = '%Y/%m/%d'

# This allows us to test both the Furo and Pytorch themes. In normal repositories, `html_theme`
# would be set to one specific theme.
_THEME = os.getenv("THEME", "qiskit_sphinx_theme")
html_theme = _THEME

if _THEME == "_qiskit_furo":
    html_theme_options = {
        "light_css_variables": {
            "color-brand-primary": "#8A3FFC",
            "color-brand-content": "#8A3FFC",
            "font-stack": "IBM Plex Sans, Roboto, Helvetica Neue, Arial, sans-serif",
            "font-stack--monospace": "IBM Plex Mono, Consolas, Courier New, monospace",
        },
    }
else:
    html_theme_options = {
        'logo_only': True,
        'display_version': True,
        'prev_next_buttons_location': 'bottom',
    }
    pygments_style = 'colorful'

html_context = {
    # Add "Was this page useful?" to the footer.
    'analytics_enabled': True,
    # Users of the theme can set prior version numbers. They'll
    # show up in the sidebar under the "Previous Versions" section.
    'version_list': [0.1, 0.2, 0.3],
    # This allows docs authors to have folders that can be
    # closed and opened in the left sidebar.
    'expandable_sidebar': True
}

# Sets a better style for code syntax highlighting.
pygments_style = 'colorful'

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
numfig_format = {
    'table': 'Table %s'
}

# Settings for Jupyter notebooks.
nbsphinx_execute = "never"
nbsphinx_thumbnails = {
    "sphinx_guide/notebook": "_static/no_image.png",
}


def setup(app):
    """Entry point for Sphinx extensions."""
    app.setup_extension('docs.language_utils')
