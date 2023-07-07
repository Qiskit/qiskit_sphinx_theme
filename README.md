# qiskit_sphinx_theme
The Sphinx theme for the Qiskit documentation.

### Warning: new theme migration

In qiskit-sphinx-theme 1.13, we migrated the theme from Pytorch to Furo, which brings several improvements. The old Pytorch theme will be removed in qiskit-sphinx-theme 2.0, which we expect to release in July or August 2023.

See the section [Migrate from old Pytorch theme to new theme](#migrate-from-old-pytorch-theme-to-new-theme) for migration instructions.

## Overview

This repository hosts three things: 
- Qiskit Sphinx theme (located in the `src/` folder)
- Example Docs (located in the `example_docs/` folder)
- Qiskit Docs Guide (located in the `docs_guide/` folder)

The Qiskit Sphinx Theme is the theme used by Qiskit Documentation (https://qiskit.org/documentation/) and Qiskit Ecosystem projects.

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

1. Set `html_theme = "qiskit"`
2. Add `"qiskit_sphinx_theme"` to `extensions`

## Slow Sphinx build? Set `remove_methods_from_toc`

By default, every subpage is included in the left table of contents. This can result in incredibly slow build times, especially when you have API documentation. It can also substantially increase the size of your HTML pages, which worsens the load time for the site.

You can set `remove_methods_from_toc` in `conf.py` to remove pages for methods from the table of contents:

```python
# Speed up docs build and reduce HTML page size.
remove_methods_from_toc = True
```

However, consider instead changing your Autosummary templates to stop having a dedicated HTML page per method. While Qiskit projects have historically used that approach, it is a suboptimal user experience and also results in a substantially slower docs build.

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

![Screenshot of examples of custom directives](https://github.com/Qiskit/qiskit_sphinx_theme/assets/14852634/9c672417-6451-4547-bc36-10709f7f3880)

## Enable Qiskit.org Analytics

Qiskit.org uses Segment Analytics to collect information on traffic to sites under the qiskit.org domain. This is not enabled by default but if you would like to enable it you can add a `analytics_enabled` variable to the `html_context` object in your `conf.py`. Setting this to `True` will enable analytics for your site once it is deployed to `qiskit.org/`.

```python
html_context = {
    'analytics_enabled': True
}
```

By enabling analytics we will be able to collect information on number of visits to each documentation page. It will also trigger the addition of a `Was this page helpful?` component at the bottom of each documentation page, so users will be able to provide yes/no feedback for each page.

![](tests/js/qiskit.test.js-snapshots/footer-includes-page-analytics-1-linux.png)

If you do not enable analytics, no data will be collected and the `Was this page helpful?` component will not show.

## Migrate from old Pytorch theme to new theme

In qiskit-sphinx-theme 1.13, we migrated to a new Sphinx theme based on Furo, which is used by pip, Black, and attrs documentation. See https://github.com/Qiskit/qiskit_sphinx_theme/issues/232 for the motivation.

qiskit-sphinx-theme 1.13 continues to support the legacy Pytorch theme, but support will be removed in version 2.0.

To migrate, in `conf.py`:

1. Ensure that `"qiskit_sphinx_theme"` is in the `extensions` list.
2. Set `html_theme = "qiskit"` rather than `"qiskit_sphinx_theme"`.
3. Remove all `html_theme_options`.
4. Decide if you want to set `remove_methods_from_toc=True` to speed up the docs build and reduce HTML page size. The new theme includes far more . Refer to [Slow Sphinx build? Set `remove_methods_from_toc`](#slow-sphinx-build-set-removemethodsfromtoc).

Then, build the docs and check that everything looks how expected. If not, please open a GitHub issue or reach out on Slack for help.

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
