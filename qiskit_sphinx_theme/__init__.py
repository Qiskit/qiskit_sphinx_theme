# This code is part of Qiskit.
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

"""Pytorch Sphinx theme."""

from pathlib import Path

from qiskit_sphinx_theme import directives, previous_releases, translations

__version__ = '1.12.0rc1'
__version_full__ = __version__


def _get_theme_absolute_path(folder_name: str) -> str:
    path = Path(__file__).parent / folder_name
    return str(path.resolve())


# See https://www.sphinx-doc.org/en/master/development/theming.html
def setup(app):
    # Used to generate URL references. Expected to be e.g. `ecosystem/finance`.
    app.add_config_value("docs_url_prefix", default=None, rebuild="html", types=[str])

    # We always activate these plugins, but they are only used when users:
    # * use the directives in their RST,
    # * set `translations_list` in conf.py, or
    # * set `versions_list` in conf.py.
    directives.setup(app)
    previous_releases.setup(app)
    translations.setup(app)

    app.add_html_theme("qiskit_sphinx_theme", _get_theme_absolute_path("pytorch_base"))
    app.add_html_theme("_qiskit_furo", _get_theme_absolute_path("furo/base"))

    if app.config.html_theme == "_qiskit_furo":
        # The below must be kept in sync with `furo/__init__.py`.
        from furo import (
            WrapTableAndMathInAContainerTransform,
            _builder_inited,
            _html_page_context,
            _overwrite_pygments_css,
        )

        app.add_post_transform(WrapTableAndMathInAContainerTransform)
        app.connect("html-page-context", _html_page_context)
        app.connect("builder-inited", _builder_inited)
        app.connect("build-finished", _overwrite_pygments_css)
    else:
        # Sphinx 6 stopped including jQuery by default. Our Pytorch theme depend on jQuery,
        # so activate it for our users automatically.
        app.setup_extension("sphinxcontrib.jquery")

    return {'parallel_read_safe': True, 'parallel_write_safe': True}
