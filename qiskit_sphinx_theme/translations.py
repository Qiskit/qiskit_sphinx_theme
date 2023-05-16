# This code is part of Qiskit.
#
# (C) Copyright IBM 2021, 2023.
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

DEFAULT_LANGUAGE = 'en'


def setup(app: sphinx.application.Sphinx) -> None:
    app.connect('config-inited', _extend_html_context)
    app.add_config_value("content_prefix", default="", rebuild="", types=[str])
    app.add_config_value("translations_list", default=[], rebuild="html", types=[list])


def _extend_html_context(_: sphinx.application.Sphinx, config: sphinx.config.Config) -> None:
    context = config.html_context
    context['translations_list'] = config.translations_list
    context['translation_url'] = partial(get_translation_url, config.content_prefix)
    context['language_label'] = get_language_label(config.language, config.translations_list)


def get_language_label(config_language: str, translations_list: list[tuple[str, str]]) -> str:
    found = next(
        (
            language_label for language_code, language_label in translations_list
            if language_code == config_language
        ),
        None
    )
    return found or config_language


def get_translation_url(content_prefix_option: str, language_code: str, pagename: str) -> str:
    base = f"/locale/{language_code}" if language_code != DEFAULT_LANGUAGE else ""
    prefix = f"/{content_prefix_option}" if content_prefix_option else ""
    return f"{prefix}{base}/{pagename}.html"
