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

import inspect
import os
import sys
from pathlib import PurePath

# This allows autodoc to find the `api_example` folder.
sys.path.insert(0, os.path.abspath(".."))

project = "Sphinx-ext-linkcode Testing"
project_copyright = "2020, Qiskit Development Team"
author = "Qiskit Development Team"
language = "en"
release = "1.3.2"

html_theme = "qiskit-ecosystem"

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
    "sphinx.ext.linkcode",
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


def linkcode_resolve(domain, info):
    """
    Determine the URL corresponding to Python object
    """
    if domain != "py":
        return None

    module = sys.modules.get(info["module"])
    if module is None:
        return None

    obj = module
    for part in info["fullname"].split("."):
        obj = getattr(obj, part)
        if not inspect.isclass(obj) or inspect.ismethod(obj) or inspect.isfunction(obj):
            return None

    full_file_name = inspect.getsourcefile(obj)
    if full_file_name is None:
        return None
    repo_root = PurePath(__file__).parent.parent.parent
    file_name = PurePath(full_file_name).relative_to(repo_root)

    try:
        source, lineno = inspect.getsourcelines(obj)
    except OSError:
        linespec = ""
    else:
        ending_lineno = lineno + len(source) - 1
        linespec = f"#L{lineno}-L{ending_lineno}"

    return f"https://github.com/Qiskit/qiskit_sphinx_theme/tree/main/{file_name}/{linespec}"
