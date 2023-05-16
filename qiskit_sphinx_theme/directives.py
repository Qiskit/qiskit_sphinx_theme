# This code is part of Qiskit.
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

from typing import TYPE_CHECKING

from docutils import nodes
from docutils.parsers.rst import Directive, directives
from docutils.statemachine import StringList

if TYPE_CHECKING:
    import sphinx.application


def setup(app: sphinx.application.Sphinx) -> None:
    app.add_directive(CardItemDirective.NAME, CardItemDirective)
    app.add_directive(CallToActionItemDirective.NAME, CallToActionItemDirective)


class CardItemDirective(Directive):
    NAME = "qiskit-card-item"

    option_spec = {
        "header": directives.unchanged,
        "image": directives.unchanged,
        "link": directives.unchanged,
        "card_description": directives.unchanged,
        "tags": directives.unchanged,
    }

    def run(self):
        header = self.options.get("header")
        if header is None:
            raise ValueError(f"`header` not set in {self.NAME} directive")
        image_source = self.options.get('image')
        if image_source is None:
            raise ValueError(f"`image` not set in {self.NAME} directive")
        link = self.options.get("link", "")
        card_description = self.options.get("card_description", "")
        tags = self.options.get("tags", "")

        card_rst = f"""
.. raw:: html

    <div class="col-md-12 tutorials-card-container" data-tags={tags}>
    <div class="card tutorials-card" link={link}>
    <div class="card-body">
    <div class="card-title-container">
        <h4>{header}</h4>
    </div>
    <p class="card-summary">{card_description}</p>
    <p class="tags">{tags}</p>
    <div class="tutorials-image"><img src='{image_source}'></div>
    </div>
    </div>
    </div>
"""
        card_list = StringList(card_rst.splitlines())
        card = nodes.paragraph()
        self.state.nested_parse(card_list, self.content_offset, card)
        return [card]


class CallToActionItemDirective(Directive):
    NAME = "qiskit-call-to-action-item"

    option_spec = {
        "header": directives.unchanged,
        "description": directives.unchanged,
        "button_link": directives.unchanged,
        "button_text": directives.unchanged,
    }

    def run(self):
        description = self.options.get("description", "")
        header = self.options.get("header")
        if header is None:
            raise ValueError(f"`header` not set in {self.NAME} directive")
        button_link = self.options.get("button_link", "")
        button_text = self.options.get("button_text", "")

        callout_rst = f"""
.. raw:: html

    <div class="col-md-6">
        <div class="text-container">
            <h3>{header}</h3>
            <p class="body-paragraph">{description}</p>
            <a class="btn with-right-arrow callout-button" href="{button_link}">{button_text}</a>
        </div>
    </div>
"""

        callout_list = StringList(callout_rst.splitlines())
        callout = nodes.paragraph()
        self.state.nested_parse(callout_list, self.content_offset, callout)
        return [callout]
