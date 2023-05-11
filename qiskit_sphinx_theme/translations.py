# -*- coding: utf-8 -*-

# This code is part of Qiskit.
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

from functools import partial

default_language = 'en'


def setup(app):
    app.connect('config-inited', _extend_html_context)
    app.add_config_value("content_prefix", default="", rebuild="", types=[str])
    app.add_config_value("translations_list", default=[], rebuild="html", types=[list])


def _extend_html_context(app, config):
    context = config.html_context
    context['translations_list'] = config.translations_list
    context['translation_url'] = partial(get_translation_url, config.content_prefix)
    context['language_label'] = get_language_label(config.language, config.translations_list)


def _get_current_translation(config_language, translations_list):
    language = config_language or default_language
    try:
        found = next(v for k, v in translations_list if k == language)
    except StopIteration:
        found = None
    return found


def get_language_label(config_language, translations_list):
    return '%s' % (_get_current_translation(config_language, translations_list) or config_language,)


def get_translation_url(content_prefix_option, code, pagename):
    base = '/locale/%s' % code if code and code != default_language else ''
    return _get_url(content_prefix_option, base, pagename)


def _get_url(content_prefix_option, base, pagename):
    return _add_content_prefix(content_prefix_option, '%s/%s.html' % (base, pagename))


def _add_content_prefix(content_prefix_option, url):
    prefix = ''
    if content_prefix_option:
        prefix = '/%s' % content_prefix_option
    return '%s%s' % (prefix, url)
