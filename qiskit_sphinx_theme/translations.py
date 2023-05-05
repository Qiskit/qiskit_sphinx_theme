# -*- coding: utf-8 -*-

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

from functools import partial

default_language = 'en'


def setup(app):
    app.connect('config-inited', _extend_html_context)
    app.add_config_value("content_prefix", default="", rebuild="", types=[str])
    app.add_config_value("translations_list", default=[], rebuild="html", types=[list])


def _extend_html_context(app, config):
    context = config.html_context
    context['translations_list'] = config.translations_list
    context['translation_url'] = partial(_get_translation_url, config)
    context['language_label'] = _get_language_label(config)


def _get_current_translation(config):
    language = config.language or default_language
    try:
        found = next(v for k, v in config.translations_list if k == language)
    except StopIteration:
        found = None
    return found


def _get_translation_url(config, code, pagename):
    base = '/locale/%s' % code if code and code != default_language else ''
    return _get_url(config, base, pagename)


def _get_language_label(config):
    return '%s' % (_get_current_translation(config) or config.language,)


def _get_url(config, base, pagename):
    return _add_content_prefix(config, '%s/%s.html' % (base, pagename))


def _add_content_prefix(config, url):
    prefix = ''
    if config.content_prefix:
        prefix = '/%s' % config.content_prefix
    return '%s%s' % (prefix, url)
