# qiskit-sphinx-theme
The Sphinx theme for Qiskit Ecosystem documentation.

### Warning: new theme migration

In qiskit-sphinx-theme 1.14, we replaced the old `qiskit_sphinx_theme` based on Pytorch with the new `qiskit-ecosystem` theme based on Furo. The old theme was removed in qiskit-sphinx-theme 2.0.

See [Migrate from old Pytorch theme to new theme](https://github.com/Qiskit/qiskit_sphinx_theme/blob/1.16/README.md#migrate-from-old-pytorch-theme-to-new-theme) for migration instructions.

## Overview

This repository hosts three things: 
- Qiskit Sphinx themes (located in the `src/` folder)
- Example Docs (located in the `example_docs/` folder)
- Qiskit Docs Guide (located in the `docs_guide/` folder)

The Qiskit Sphinx Themes are the themes used by Qiskit Documentation (https://qiskit.org/documentation/) and Qiskit Ecosystem projects.

The Example Docs is a minimal Sphinx project that is used for testing the Qiskit Sphinx Theme. Every
pull request will trigger [a GitHub workflow](https://github.com/Qiskit/qiskit_sphinx_theme/blob/main/.github/workflows/main.yml) that builds the Example Docs to make sure the changes do
not introduce unintended changes.

The Qiskit Docs Guide hosts instructions, guidelines and recommendations of good documentation
practices. Its intent is to help Qiskit maintainers improve the documentation of their projects.
The guide is hosted online here: https://qisk.it/docs-guide.

## Installation

This package is available on PyPI using:

```bash
pip install qiskit-sphinx-theme
```

Then, set up the theme by updating `conf.py`:

1. Set `html_theme = "qiskit-ecosystem"` (only Qiskit Terra should use `qiskit`)
2. Add `"qiskit_sphinx_theme"` to `extensions`

You also likely want to set `html_title` in `conf.py`. This results in the left sidebar having a more useful and concise name, along with the page title in the browser. Most projects will want to use this in their `conf.py`:

```python
# Sphinx expects you to set these already.
project = "My Project"
release = "4.12"

# This sets the title to e.g. `My Project 4.12`.
html_title = f"{project} {release}"
```

## Enable translations

First, coordinate with the Translations team at https://github.com/qiskit-community/qiskit-translations to express your interest and to coordinate setting up the infrastructure.

Once the Translations team is ready, then update your `conf.py`:

* Ensure that `qiskit_sphinx_theme` is in the `extensions` setting.
* Set the option `translations_list` to a list of pairs of the locale code and the language name, e.g. `[..., ("de_DE", "German")]`.
* Set the option `docs_url_prefix` to your project's URL prefix, like `ecosystem/finance`.

For example:

```python
extensions = [
   ...,
   "qiskit_sphinx_theme",
]

translations_list = [
    ('en', 'English'),
    ('bn_BN', 'Bengali'),
    ('fr_FR', 'French'),
    ('de_DE', 'German'),
]

docs_url_prefix = "ecosystem/finance"
```

## Enable Previous Releases

This feature allows you to link to previous versions of the docs in the left sidebar.

First, start additionally deploying your docs to `<project-prefix>/stable/<version>/`, e.g. `/ecosystem/finance/stable/0.5/index.html`. See https://github.com/Qiskit/qiskit-experiments/blob/227867937a08075092cd11756214bee3fb1d4d3d/tools/deploy_documentation.sh#L38-L39 for an example.

Then, update your `conf.py`:

* Ensure that `qiskit_sphinx_theme` is in the `extensions` setting.
* Add to the option `html_context` an entry for `version_list` with a list of the prior versions, e.g. `["0.4", "0.5"]`.
  * Each of these versions must be deployed with the above `stable/<version>` URL scheme.
  * You can manually set this, or some projects write a Sphinx extension to dynamically compute the value.
  * You should only put prior versions in this list, not the current release.
* Set the option `docs_url_prefix` to your project's URL prefix, like `ecosystem/finance`.

For example:

```python
extensions = [
   ...,
   "qiskit_sphinx_theme",
]

html_context = {
   "version_list": ["0.4", "0.5"],
}

docs_url_prefix = "ecosystem/finance"
```

## Use custom RST directives

The `qiskit_sphinx_theme` extension defines the below custom directives for you to use in RST, if you'd like. See `example_docs/docs/sphinx_guide/custom_directives.rst` for examples of how to use them.

* `qiskit-card`
* `qiskit-call-to-action-item` and `qiskit-call-to-action-grid`

![](tests/js/qiskit.test.js-snapshots/custom-directives-1-linux.png)
![](tests/js/qiskit.test.js-snapshots/custom-directives-2-linux.png)

## Customize or disable the Ecosystem theme logo

The `qiskit-ecosystem` theme includes the Qiskit Ecosystem logo by default.

You can use a custom logo by adding a logo file (SVG or PNG) as a sibling to your `conf.py`, e.g. `docs/logo.svg`. Then, set `html_logo` in `conf.py` to the name of the file, e.g. `html_logo = "logo.png"`.

When using a custom logo, you may want to disable the project's name in the sidebar by setting `sidebar_hide_name` in `html_theme_options`:

```python
html_theme_options = {
    "sidebar_hide_name": True,
}
```

You can disable logos by setting `disable_ecosystem_logo` in `html_theme_options`:

```python
html_theme_options = {
    "disable_ecosystem_logo": True,
}
```

## IBM Projects: how to use blue color scheme for Ecosystem theme

By default, the `qiskit-ecosystem` theme uses purple as an accent color. Most projects should continue to use this, but certain highly IBM-affiliated projects like Qiskit IBM Runtime can change the accent color to blue by setting up `conf.py` like this:

```python
# Only intended for specific IBM projects.
html_theme_options = {
    "light_css_variables": {
        "color-brand-primary": "var(--qiskit-color-blue)",
    }
}
```

## Tip: suggested site structure

To keep UX/UI similar across different Qiskit packages, we encourage the following structure for you sidebar, which can be set in the toctree of your `index.rst`:

```rst
.. toctree::
  :hidden:

   Documentation Home <index>
   Getting Started <getting_started>
   Tutorials <tutorials/index>
   How-to Guides <how_to/index>
   API Reference <apidocs/index>
   Explanations <explanations/index>
   Release Notes <release_notes>
   GitHub <https://github.com/your-repo>
```

Each item in the toctree corresponds to a single `.rst` file, and can use internal links or external. External links will have a "new tab" icon rendered next to them.
