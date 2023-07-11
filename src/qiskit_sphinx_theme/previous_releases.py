# This code is a Qiskit project.
#
# (C) Copyright IBM 2023.
#
# This code is licensed under the Apache License, Version 2.0. You may
# obtain a copy of this license in the LICENSE.txt file in the root directory
# of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this
# copyright notice, and modified files need to carry a notice indicating
# that they have been altered from the originals.

from __future__ import annotations

from functools import partial
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    import sphinx.application
    import sphinx.config


def setup(app: sphinx.application.Sphinx) -> None:
    app.connect("config-inited", extend_html_context)


def extend_html_context(_: sphinx.application.Sphinx, config: sphinx.config.Config) -> None:
    context = config.html_context
    if context.get("version_list") and not config.docs_url_prefix:
        raise Exception(
            "Because `version_list` is set in the Sphinx `html_context`, you must also set "
            "`docs_url_prefix` in `conf.py` to e.g. `ecosystem/finance` or `ecosystem/nature`."
        )

    context["previous_versions_url"] = partial(get_previous_versions_url, config.docs_url_prefix)


def get_previous_versions_url(docs_url_prefix: str, version: str) -> str:
    return f"/{docs_url_prefix}/stable/{version}/index.html"
