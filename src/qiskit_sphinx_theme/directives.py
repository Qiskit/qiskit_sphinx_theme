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

from typing import TYPE_CHECKING

from docutils import nodes
from docutils.parsers.rst import Directive, directives

if TYPE_CHECKING:
    import sphinx.application


def setup(app: sphinx.application.Sphinx) -> None:
    app.add_directive(QiskitCardDirective.NAME, QiskitCardDirective)
    app.add_directive(QiskitCallToActionItemDirective.NAME, QiskitCallToActionItemDirective)
    app.add_directive(QiskitCallToActionGridDirective.NAME, QiskitCallToActionGridDirective)


class QiskitCardDirective(Directive):
    NAME = "qiskit-card"

    option_spec = {
        "header": directives.unchanged,
        "image": directives.unchanged,
        "link": directives.unchanged,
        "card_description": directives.unchanged,
    }

    def run(self) -> list[nodes.Element]:
        header = self.options.get("header")
        if header is None:
            raise ValueError(f"`header` not set in {self.NAME} directive")
        image_source = self.options.get("image")
        if image_source is None:
            raise ValueError(f"`image` not set in {self.NAME} directive")
        link = self.options.get("link", "")
        card_description = self.options.get("card_description", "")

        html = f"""
    <a class="qiskit-card" href="{link}">
      <div class="qiskit-card-text-container">
        <h3>{header}</h3>
        <p>{card_description}</p>
      </div>
      <div class="qiskit-card-image-container"><img src='{image_source}'></div>
    </a>
"""
        node = nodes.raw("", html, format="html")
        return [node]


class QiskitCallToActionItemDirective(Directive):
    NAME = "qiskit-call-to-action-item"

    option_spec = {
        "header": directives.unchanged,
        "description": directives.unchanged,
        "button_link": directives.unchanged,
        "button_text": directives.unchanged,
    }

    def run(self) -> list[nodes.Element]:
        description = self.options.get("description", "")
        header = self.options.get("header")
        if header is None:
            raise ValueError(f"`header` not set in {self.NAME} directive")
        button_link = self.options.get("button_link", "")
        button_text = self.options.get("button_text", "")

        html = f"""
    <div class="qiskit-call-to-action-item">
        <h3>{header}</h3>
        <p>{description}</p>
        <a href="{button_link}">{button_text}</a>
    </div>
"""
        node = nodes.raw("", html, format="html")
        return [node]


class QiskitCallToActionGridDirective(Directive):
    NAME = "qiskit-call-to-action-grid"

    has_content = True

    def run(self) -> list[nodes.Element]:
        outer_div_open = nodes.raw("", '<div class="qiskit-call-to-action-grid">', format="html")
        outer_div_close = nodes.raw("", "</div>", format="html")
        node = nodes.Element()
        self.state.nested_parse(self.content, self.content_offset, node)
        return [outer_div_open, *node, outer_div_close]
