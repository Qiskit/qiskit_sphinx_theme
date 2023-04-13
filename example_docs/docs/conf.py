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

sys.path.insert(0, os.path.abspath(".."))

project = 'Qiskit sphinx theme'
project_copyright = '2020, Qiskit Development Team'
author = 'Qiskit Development Team'
language = "en"
release = "9.99"

html_static_path = ['_static']
templates_path = ['_templates']
html_css_files = ['gallery.css']
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

html_theme = 'qiskit_sphinx_theme'
html_theme_options = {
    'logo_only': True,
    'display_version': True,
    'prev_next_buttons_location': 'bottom',
}
html_context = {
    'analytics_enabled': True,
    'version_list': [0.1, 0.2, 0.3],
    'expandable_sidebar': True
}

pygments_style = 'colorful'

rst_prolog = f"""
.. |version| replace:: {release}
"""

autosummary_generate = True
autodoc_default_options = {
    'inherited-members': None,
}
autoclass_content = 'both'

add_module_names = False
modindex_common_prefix = ['qiskit.']

numfig = True
numfig_format = {
    'table': 'Table %s'
}

nbsphinx_execute = "never"
nbsphinx_thumbnails = {
    "sphinx_guide/notebook": "_static/no_image.png",
}


def setup(app):
    app.setup_extension('docs.language_utils')