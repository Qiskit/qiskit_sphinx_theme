# This code is a Qiskit project.
#
# (C) Copyright IBM 2020, 2023.
#
# This code is licensed under the Apache License, Version 2.0. You may
# obtain a copy of this license in the LICENSE.txt file in the root directory
# of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this
# copyright notice, and modified files need to carry a notice indicating
# that they have been altered from the originals.

from __future__ import annotations

from pathlib import Path
from typing import TYPE_CHECKING

from qiskit_sphinx_theme import directives, previous_releases, translations

if TYPE_CHECKING:
    import sphinx.addnodes
    import sphinx.application
    import sphinx.config

__version__ = "1.13.0"
__version_full__ = __version__


def _get_theme_absolute_path(folder_name: str) -> str:
    path = Path(__file__).parent / folder_name
    return str(path.resolve())


def remove_thebe_if_not_needed(
    app: sphinx.application.Sphinx,
    pagename: str,
    templatename: str,
    context: dict,
    doctree: sphinx.addnodes.document,
) -> None:
    """
    Remove files that jupyter-sphinx incorrectly tries to add.

    See https://github.com/Qiskit/qiskit_sphinx_theme/issues/291 for more context.
    """
    # jupyter-sphinx might be not installed. If so, skip this function.
    try:
        from jupyter_sphinx.thebelab import ThebeButtonNode
    except ImportError:
        return

    if not doctree or doctree.traverse(ThebeButtonNode):
        return

    thebe_js_files = [
        "_static/sphinx-thebe.js",
        "_static/thebelab-helper.js",
        "https://unpkg.com/thebelab@latest/lib/index.js",
    ]
    context["script_files"] = [
        js_file for js_file in context["script_files"] if js_file not in thebe_js_files
    ]

    thebe_css_files = ["_static/thebelab.css", "_static/sphinx-thebe.css"]
    context["css_files"] = [
        css_file for css_file in context["css_files"] if css_file not in thebe_css_files
    ]


def activate_themes(app: sphinx.application.Sphinx, config: sphinx.config.Config) -> None:
    if config.html_theme == "qiskit":
        # We set a low priority so that our Qiskit CSS file overrides Furo.
        app.add_css_file("styles/furo.css", 100)
        app.add_js_file("scripts/qiskit-sphinx-theme.js")
    else:
        # Sphinx 6 stopped including jQuery by default. Our Pytorch theme depend on jQuery,
        # so activate it for our users automatically.
        app.setup_extension("sphinxcontrib.jquery")


def remove_furo_js(
    app: sphinx.application.Sphinx,
    pagename: str,
    templatename: str,
    context: dict,
    doctree: sphinx.addnodes.document,
) -> None:
    context["script_files"] = [
        js_file for js_file in context["script_files"] if js_file != "_static/scripts/furo.js"
    ]


# See https://www.sphinx-doc.org/en/master/development/theming.html
def setup(app: sphinx.application.Sphinx) -> dict[str, bool]:
    # Used to generate URL references. Expected to be e.g. `ecosystem/finance`.
    app.add_config_value("docs_url_prefix", default=None, rebuild="html", types=[str])

    # We always activate these plugins, but they are only used when users:
    # * use the directives in their RST,
    # * set `translations_list` in conf.py, or
    # * set `versions_list` in conf.py.
    directives.setup(app)
    previous_releases.setup(app)
    translations.setup(app)

    app.add_html_theme("qiskit_sphinx_theme", _get_theme_absolute_path("pytorch"))
    app.add_html_theme("qiskit", _get_theme_absolute_path("theme/qiskit-sphinx-theme"))

    app.connect("config-inited", activate_themes)
    app.connect("html-page-context", remove_furo_js, priority=600)
    app.connect("html-page-context", remove_thebe_if_not_needed)

    return {"parallel_read_safe": True, "parallel_write_safe": True}
