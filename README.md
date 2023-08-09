# qiskit-sphinx-theme
The Sphinx themes for Qiskit and Qiskit Ecosystem documentation.

### Warning: new theme migration

In qiskit-sphinx-theme 1.13, we added the new `qiskit` theme, which migrates from Pytorch to Furo for several improvements. qiskit-sphinx-theme 1.14 added the `qiskit-ecosystem` theme. The old Pytorch theme will be removed in qiskit-sphinx-theme 2.0, which we expect to release in July or August 2023.

See the section [Migrate from old Pytorch theme to new theme](#migrate-from-old-pytorch-theme-to-new-theme) for migration instructions.

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

## Add an announcement banner to all pages

> :warning: **Note:** This feature is currently only available for the Qiskit theme, it is not yet available in the Ecosystem theme


The `qiskit` theme includes the ability to add a custom announcement banner to every page. You can configure this in your `conf.py` by adding your
custom announcement text to the `theme_announcement` variable in the `html_context` object, for example:

```
html_context = {
    "theme_announcement": "🎉 Custom announcement text!",
}
```
The above code will enable the following banner:

<img width="1330" alt="Screenshot 2023-08-07 at 5 13 10 PM" src="https://github.com/qiskit-community/ecosystem/assets/23662430/cbb86903-17fd-4752-a955-5e8c5eda3383">

You can also optionally add a "Learn more" url by additionally setting the `announcement_url` in the `html_context`, like so:

```
html_context = {
    "theme_announcement": "🎉 Custom announcement text!",
    "announcement_url": "https://example.com"
}
```
The above code will render the following banner:

<img width="1327" alt="Screenshot 2023-08-07 at 5 12 02 PM" src="https://github.com/qiskit-community/ecosystem/assets/23662430/79ccb19d-3392-4ea9-993e-b006dc7481dc">

The default text for the link is "Learn more" but you can provide custom link text by setting the `announcement_url_text` in the `html_context`:
```
html_context = {
    "theme_announcement": "🎉 Custom announcement text!",
    "announcement_url": "https://example.com",
    "announcement_url_text": "Check it out",
}
```

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

## Migrate from old Pytorch theme to new theme

In qiskit-sphinx-theme 1.13, we migrated to a new Sphinx theme called `qiskit`, which is based on Furo from the pip, Black, and attrs documentation. See https://github.com/Qiskit/qiskit_sphinx_theme/issues/232 for the motivation. qiskit-sphinx-theme 1.14 added the `qiskit-ecosystem` theme for Ecosystem projects.

qiskit-sphinx-theme 1.13+ continues to support the legacy Pytorch theme, but support will be removed in version 2.0.

To migrate, in `conf.py`:

1. Ensure that `"qiskit_sphinx_theme"` is in the `extensions` list.
2. Set `html_theme = "qiskit-ecosystem"` rather than `"qiskit_sphinx_theme"`. (`qiskit` should only be used by Qiskit Terra.)
3. Remove all `html_theme_options`.
4. Remove `expandable_sidebar` from `html_context`, if set. If it was set, follow the below section [How to migrate expandable_sidebar](#how-to-migrate-expandable_sidebar).

Render the docs and check that everything looks how expected. If not, please open a GitHub issue or reach out on Slack for help.

### How to migrate expandable_sidebar

With the old theme, to have expandable folders, you had to have a dedicated `.. toctree ::` directive with a `:caption:` option, like this:

```rst
.. toctree::
  :caption: My Folder
  :hidden:

  Page 1 <page1>
  Page 2 <page2>
```

Instead, the new theme will render the `:caption:` as a top-level section header in the left sidebar, with top-level entries for each page. See the screenshot in the PR description of https://github.com/Qiskit/qiskit_sphinx_theme/pull/384 for an example of how the old theme renders `:caption:` and compare to [the new theme](tests/js/qiskit.test.js-snapshots/left-side-bar-renders-correctly-1-linux.png).

Additionally, the new theme renders pages with their own subpages as expandable folders, unlike the old theme. [For example](tests/js/qiskit.test.js-snapshots/left-side-bar-renders-correctly-1-linux.png), `<apidocs/index>` will include all subpages that are listed in the `.. toctree ::` of the page `apidocs/index.rst`.

So, when migrating, you have to decide which behavior you want:

- Use the new theme's style. No changes necessary.
- Use the new theme's style, but get rid of the top level section header. To implement:
  1. Consolidate the `.. toctree ::` directive with earlier ones so that they are all in the same `toctree`.
- Keep the `:caption:` as an expandable folder, rather than a top-level section header. To implement:
  1. Create a new directory and RST file like `my_folder/index.rst`.
  2. Move the `.. toctree::` directive to that page.
  3. Get rid of the `:caption:` option.
  4. Link to the new file `my_folder/index.rst` in the parent `index.rst` by adding it to a `.. toctree ::` in the parent.

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
