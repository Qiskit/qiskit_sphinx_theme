# This file is vendored from Furo (created by Pradyun Gedam) and used under the MIT license.
#
# When making changes, surround it with `QISKIT CHANGE: start` and `QISKIT CHANGE: end` comments.
# We also add MyPy type ignores.

"""A clean customisable Sphinx documentation theme."""

__version__ = "2023.05.20.dev1"

import hashlib
import logging
import os
from functools import lru_cache
from pathlib import Path
from typing import Any, Dict, Iterator, List, Optional

import sphinx.application
import sphinx.config
from docutils import nodes
from pygments.formatters import HtmlFormatter
from pygments.style import Style
from pygments.token import Text
from sphinx.builders.html import StandaloneHTMLBuilder
from sphinx.environment.adapters.toctree import TocTree
from sphinx.highlighting import PygmentsBridge
from sphinx.transforms.post_transforms import SphinxPostTransform

from .navigation import get_navigation_tree

# QISKIT CHANGE: start. change the theme path.
THEME_PATH = (Path(__file__).parent.parent / "theme" / "qiskit-sphinx-theme").resolve()
# QISKIT CHANGE: end.

logger = logging.getLogger(__name__)

# GLOBAL STATE
_KNOWN_STYLES_IN_USE: Dict[str, Optional[Style]] = {
    "light": None,
    "dark": None,
}


class WrapTableAndMathInAContainerTransform(SphinxPostTransform):
    """A Sphinx post-transform that wraps `table` and `div.math` in a container `div`.

    This makes it possible to handle these overflowing the content-width, which is
    necessary in a responsive theme.
    """

    formats = ("html",)
    default_priority = 500

    def run(self, **kwargs: Any) -> None:
        """Perform the post-transform on `self.document`."""
        get_nodes = (
            self.document.findall  # docutils 0.18+
            if hasattr(self.document, "findall")
            else self.document.traverse  # docutils <= 0.17.x
        )
        for node in list(get_nodes(nodes.table)):
            new_node = nodes.container(classes=["table-wrapper"])
            new_node.update_all_atts(node)
            node.parent.replace(node, new_node)
            new_node.append(node)

        for node in list(get_nodes(nodes.math_block)):
            new_node = nodes.container(classes=["math-wrapper"])
            new_node.update_all_atts(node)
            node.parent.replace(node, new_node)
            new_node.append(node)


def has_not_enough_items_to_show_toc(builder: StandaloneHTMLBuilder, docname: str) -> bool:
    """Check if the toc has one or fewer items."""
    assert builder.env

    toctree = TocTree(builder.env).get_toc_for(docname, builder)
    try:
        self_toctree = toctree[0][1]  # type: ignore
    except IndexError:
        val = True
    else:
        # There's only the page's own toctree in there.
        val = len(self_toctree) == 1 and self_toctree[0].tagname == "toctree"
    return val


def get_pygments_style_colors(style: Style, *, fallbacks: Dict[str, str]) -> Dict[str, str]:
    """Get background/foreground colors for given pygments style."""
    background = style.background_color  # type: ignore
    text_colors = style.style_for_token(Text)  # type: ignore
    foreground = text_colors["color"]

    if not background:
        background = fallbacks["background"]

    if not foreground:
        foreground = fallbacks["foreground"]
    else:
        foreground = f"#{foreground}"

    return {"background": background, "foreground": foreground}


@lru_cache(maxsize=2)
def get_colors_for_codeblocks(highlighter: PygmentsBridge, *, fg: str, bg: str) -> Dict[str, str]:
    """Get background/foreground colors for given pygments style."""
    return get_pygments_style_colors(
        highlighter.formatter_args["style"],
        fallbacks={
            "foreground": fg,
            "background": bg,
        },
    )


def _compute_navigation_tree(config: sphinx.config.Config, context: Dict[str, Any]) -> str:
    # The navigation tree, generated from the sphinx-provided ToC tree.
    if "toctree" in context:
        toctree = context["toctree"]
        toctree_html = toctree(
            collapse=False,
            titles_only=True,
            maxdepth=config.html_theme_options.get("navigation_depth", -1),
            includehidden=True,
        )
    else:
        toctree_html = ""

    return get_navigation_tree(toctree_html)


def _compute_hide_toc(
    context: Dict[str, Any],
    *,
    builder: StandaloneHTMLBuilder,
    docname: str,
) -> bool:
    # Should the table of contents be hidden?
    file_meta = context.get("meta", None) or {}
    if "hide-toc" in file_meta:
        return True
    elif "toc" not in context:
        return True
    elif not context["toc"]:
        return True

    return has_not_enough_items_to_show_toc(builder, docname)


@lru_cache(maxsize=None)
def _asset_hash(path: str) -> str:
    """Append a `?digest=` to an url based on the file content."""
    full_path = THEME_PATH / "static" / path
    digest = hashlib.sha1(full_path.read_bytes()).hexdigest()

    return f"_static/{path}?digest={digest}"


def _add_asset_hashes(static: List[str], add_digest_to: List[str]) -> None:
    for asset in add_digest_to:
        index = static.index("_static/" + asset)
        static[index].filename = _asset_hash(asset)  # type: ignore


def _html_page_context(
    app: sphinx.application.Sphinx,
    pagename: str,
    templatename: str,
    context: Dict[str, Any],
    doctree: Any,
) -> None:
    if not isinstance(app.builder, StandaloneHTMLBuilder):
        raise Exception(
            "Furo is being used with a non-HTML builder. "
            "If you're seeing this error, it is a symptom of a mistake in your "
            "configuration."
        )

    if "css_files" in context:
        # QISKIT CHANGE: start. Don't expect furo.css
        # if "_static/styles/furo.css" not in context["css_files"]:
        #     raise Exception(
        #         "This documentation is not using `furo.css` as the stylesheet. "
        #         "If you have set `html_style` in your conf.py file, remove it."
        #     )
        # QISKIT CHANGE: end.

        # QISKIT CHANGE: start. Hash our CSS file, not Furo files.
        _add_asset_hashes(
            context["css_files"],
            ["styles/qiskit-sphinx-theme.css"],
        )
        # QISKIT CHANGE: end.

    if "scripts" in context:
        # QISKIT CHANGE: start. Hash our JS file, not furo.js.
        _add_asset_hashes(
            context["scripts"],
            ["scripts/qiskit-sphinx-theme.js"],
        )
        # QISKIT CHANGE: end.

    # Basic constants
    context["furo_version"] = __version__

    # Values computed from page-level context.
    context["furo_navigation_tree"] = _compute_navigation_tree(app.config, context)
    context["furo_hide_toc"] = _compute_hide_toc(context, builder=app.builder, docname=pagename)

    # Inject information about styles
    context["furo_pygments"] = {
        "light": get_pygments_style_colors(
            _KNOWN_STYLES_IN_USE["light"],  # type: ignore
            fallbacks=dict(
                foreground="black",
                background="white",
            ),
        ),
        "dark": get_pygments_style_colors(
            _KNOWN_STYLES_IN_USE["dark"],  # type: ignore
            fallbacks=dict(
                foreground="white",
                background="black",
            ),
        ),
    }


def _builder_inited(app: sphinx.application.Sphinx) -> None:
    if "furo" in app.config.extensions:
        raise Exception(
            "Did you list 'furo' in the `extensions` in conf.py? "
            "If so, please remove it. Furo does not work with non-HTML builders "
            "and specifying it as an `html_theme` is sufficient."
        )

    if not isinstance(app.builder, StandaloneHTMLBuilder):
        raise Exception(
            "Furo is being used as an extension in a non-HTML build. " "This should not happen."
        )

    # QISKIT CHANGE: start. Don't activate Furo files.
    # Our JS file needs to be loaded as soon as possible.
    # app.add_js_file("scripts/furo.js", priority=200)

    # 500 is the default priority for extensions, we want this after this.
    # app.add_css_file("styles/furo-extensions.css", priority=600)
    # QISKIT CHANGE: end.

    builder = app.builder
    assert builder, "what?"
    assert builder.highlighter is not None, "there should be a default style known to Sphinx"
    assert builder.dark_highlighter is None, "this shouldn't be a dark style known to Sphinx"
    update_known_styles_state(app)

    def _update_default(key: str, *, new_default: Any) -> None:
        app.config.values[key] = (new_default, *app.config.values[key][1:])

    # Change the default permalinks icon
    _update_default("html_permalinks_icon", new_default="#")


def update_known_styles_state(app: sphinx.application.Sphinx) -> None:
    """Update a global store of known styles of this application."""
    global _KNOWN_STYLES_IN_USE

    _KNOWN_STYLES_IN_USE = {
        "light": _get_light_style(app),
        "dark": _get_dark_style(app),
    }


def _get_light_style(app: sphinx.application.Sphinx) -> Style:
    return app.builder.highlighter.formatter_args["style"]  # type: ignore


def _get_dark_style(app: sphinx.application.Sphinx) -> Style:
    # number_of_hours_spent_figuring_this_out = 7
    #
    # Hello human in the future! This next block of code needs a bit of a story, and
    # if you're going to touch it, remember to update the number above (or remove this
    # comment entirely).
    #
    # Hopefully, you know that Sphinx allows extensions and themes to add configuration
    # values via `app.add_config_value`. This usually lets users set those values from
    # `conf.py` while allowing the extension to read from it and utilise that information.
    # As any reasonable person who's written a Sphinx extension before, you would
    # expect the following to work:
    #
    #     dark_style = app.config.pygments_dark_style
    #
    # Turns out, no. How dare you expect things to just work!? That stuff just returns
    # the default value provided when calling `app.add_config_value`. Yes, even if you
    # set it in `conf.py`. Why? Good question. :)
    #
    # The logic in Sphinx literally looks it up in the same mapping as what was
    # manipulated by `add_config_value`, and there's no other spot where that value
    # gets manipulated. I spent a bunch of time debugging how that class works, and...
    # yea, I can't figure it out. There's multiple mappings floating around and bunch
    # of manipulation being done for all kinds of things.
    #
    # The only place on the config object where I was able to find the user-provided
    # value from `conf.py` is a private variable `self._raw_config`. Those values are
    # supposed to get added to self.__dict__[...], and generally be accessible through
    # the object's custom `__getattr__`.
    #
    # Anyway, after giving up on figuring out how to file a PR to fix this upstream, I
    # started looking for hacky ways to get this without reaching into private
    # variables. That quest led to a very simple conclusion: no, you can't do that.
    #
    # So, here we are: with the only option being to reach into the guts of the beast,
    # and pull out the specific thing that's needed. This is obviously fragile though,
    # so this is written with the assumption that any changes to Sphinx's config
    # object's internals would correspond to the originally expected behaviour working.
    # This is so that when any of Sphinx's internals change, this logic would basically
    # fall back to the original behaviour and also print a warning, so that hopefully
    # someone will report this. Maybe it'll all be fixed, and I can remove this whole
    # hack and this giant comment.

    # HACK: begins here
    dark_style = None
    try:
        if (
            hasattr(app.config, "_raw_config")
            and isinstance(app.config._raw_config, dict)
            and "pygments_dark_style" in app.config._raw_config
        ):
            dark_style = app.config._raw_config["pygments_dark_style"]
    except (AttributeError, KeyError) as e:
        logger.warning(
            (
                "Furo could not determine the value of `pygments_dark_style`. "
                "Falling back to using the value provided by Sphinx.\n"
                "Caused by %s"
            ),
            e,
        )

    if dark_style is None:
        dark_style = app.config.pygments_dark_style

    return PygmentsBridge("html", dark_style).formatter_args["style"]  # type: ignore


def _get_styles(formatter: HtmlFormatter, *, prefix: str) -> Iterator[str]:
    """Get styles out of a formatter, where everything has the correct prefix."""
    for line in formatter.get_linenos_style_defs():
        yield f"{prefix} {line}"
    yield from formatter.get_background_style_defs(prefix)
    yield from formatter.get_token_style_defs(prefix)


def get_pygments_stylesheet() -> str:
    """Generate the theme-specific pygments.css.

    There is no way to tell Sphinx how the theme handles dark mode; at this time.
    """
    light_formatter = PygmentsBridge.html_formatter(style=_KNOWN_STYLES_IN_USE["light"])
    dark_formatter = PygmentsBridge.html_formatter(style=_KNOWN_STYLES_IN_USE["dark"])

    lines: List[str] = []

    lines.extend(_get_styles(light_formatter, prefix=".highlight"))

    lines.append("@media not print {")

    dark_prefix = 'body[data-theme="dark"] .highlight'
    lines.extend(_get_styles(dark_formatter, prefix=dark_prefix))

    not_light_prefix = 'body:not([data-theme="light"]) .highlight'
    lines.append("@media (prefers-color-scheme: dark) {")
    lines.extend(_get_styles(dark_formatter, prefix=not_light_prefix))
    lines.append("}")

    lines.append("}")

    return "\n".join(lines)


# Yup, we overwrite the default pygments.css file, because it can't possibly respect
# the needs of this theme.
def _overwrite_pygments_css(
    app: sphinx.application.Sphinx,
    exception: Optional[Exception],
) -> None:
    if exception is not None:
        return

    assert app.builder
    with open(
        os.path.join(app.builder.outdir, "_static", "pygments.css"),
        "w",
        encoding="utf-8",
    ) as f:
        f.write(get_pygments_stylesheet())


def setup(app: sphinx.application.Sphinx) -> Dict[str, Any]:
    """Entry point for sphinx theming."""
    app.require_sphinx("3.0")

    app.add_config_value("pygments_dark_style", default="native", rebuild="env", types=[str])

    # QISKIT CHANGE: start. Don't register the theme.
    # app.add_html_theme("furo", str(THEME_PATH))
    # QISKIT CHANGE: end.

    app.add_post_transform(WrapTableAndMathInAContainerTransform)

    app.connect("html-page-context", _html_page_context)
    app.connect("builder-inited", _builder_inited)
    app.connect("build-finished", _overwrite_pygments_css)

    return {
        "parallel_read_safe": True,
        "parallel_write_safe": True,
        "version": __version__,
    }