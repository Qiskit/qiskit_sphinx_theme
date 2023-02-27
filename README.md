# qiskit_sphinx_theme
The Sphinx theme for the Qiskit documentation.

## Overview

This repository hosts three things: 
- Qiskit Sphinx theme (located in the [qiskit_sphinx_theme](/qiskit_sphinx_theme) folder)
- Sample Docs (located in the [docs](/docs) folder)
- Qiskit Docs Guide (located in the [docs_guide](/docs_guide) folder)

The Qiskit Sphinx Theme is the theme used by Qiskit
Documentation (https://qiskit.org/documentation/) site. It contains mainly front end elements that
gives the Qiskit design style.

The Sample Docs is a minimal Sphinx project that is used for testing the Qiskit Sphinx Theme. Every
pull request will trigger [a GitHub workflow](https://github.com/Qiskit/qiskit_sphinx_theme/blob/main/.github/workflows/main.yml) that builds the Sample Docs to make sure the changes do
not introduce unintended changes.

The Qiskit Docs Guide hosts instructions, guidelines and recommendations of good documentation
practices. It's intent is to help Qiskit maintainers improve the documentation of their projects.
The guide is hosted online here: https://qisk.it/docs-guide.

## Installation

This package is available on PyPI using:

```bash
pip install qiskit-sphinx-theme
```
## Configure Left Sidebar

To keep UX/UI similar across different Qiskit packages we strongly encourage the following structure for you sidebar, which can be set in the toctree of your `index.rst`:

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

The above toctree will render a sidebar that looks like the image below:

<img width="626" alt="Screenshot 2023-02-09 at 12 13 52 PM" src="https://user-images.githubusercontent.com/23662430/217783745-43623c4f-897a-4a96-9d05-137d881ddb3f.png">

Each item in the toctree corresponds to a single `.rst` file, and can use internal links or external. External links will have a "new tab" icon rendered next to them.

<img width="257" alt="Screenshot 2023-02-09 at 12 14 45 PM" src="https://user-images.githubusercontent.com/23662430/217783918-ae4fc420-43c5-4d56-b135-4f12043cd881.png">

In addition to the pages in the toctree, the sidebar also adds:
- (optional) a separate dropdown menu *at the top* with different languages, but only if you have a `translations_list` setup in your `html_context` in your `conf.py` corresponding logic in a `version_utils.py`.
- (optional) a dropdown *at the bottom* with links to previous releases, if you have a `version_list` setup in your `html_context` in your `conf.py` and corresponding logic in a `version_utils.py`.

### Add Expandable Items to Sidebar

You may want to configure your documentation to include expandable items in the sidebar, for example:

<img width="467" alt="Screenshot 2023-02-09 at 12 29 13 PM" src="https://user-images.githubusercontent.com/23662430/217787248-8017da57-c347-4eea-a220-8515ca2ce8d6.png">

To configure your documentation to use exapandable sidebar headings like the example above you must do the following:
1. Add a `expandable_sidebar` variable to the `html_context` object in your `conf.py` and set the value to `True`:
    ```python
    html_context = {
        'expandable_sidebar': True
    }
    ```
2. Refactor the `toctree` in your `index.rst` to separate your pages into different sections. Sections that include a `:caption:` directive will be turned into expandable sidebar sections, with the caption forming the title of the dropdown. for example, to render the expandable sidebar shown above your `toctree` in your `index.rst` should look like this:
    ```rst
    .. toctree::
    :hidden:

    Documentation Home <index>
    Getting Started <get_started>

    .. toctree::
    :hidden:
    :caption: Tutorials

    Tutorial 1 <tutorials/01>
    Tutorial 2 <tutorials/02>
    Tutorial 3 <tutorials/03>>
    All Tutorials <tutorials/index>

    .. toctree::
    :hidden:
    :glob:
    :caption: How-to Guides

    how_tos/*

    .. toctree::
    :hidden:
    :glob:
    :caption: API Reference

    apidocs/*

    .. toctree::
    :hidden:
    :glob:
    :caption: Explanations

    expalanations/*

    .. toctree::
    :hidden:

    Release Notes <release_notes>
    GitHub <https://github.com/your-repo>
    ```


*Tip: if you want to add all files in a sub-directory to your expandable dropdown section you can use the `:glob:` directive instead of listing out each page (see example above for the How-to Guides, API Reference and Explanations sections). This will list out each page in alphabetical order, so if you want a specific order you will need to list the pages out individually in the `toctree` (see example above for the Tutorials section)*



## Enable Qiskit.org Analytics

Qiskit.org uses Segment Analytics to collect information on traffic to sites under the qiskit.org domain. This is not enabled by default but if you would like to enable it you can add a `analytics_enabled` variable to the `html_context` object in your `conf.py`. Setting this to `True` will enable analytics for your site once it is deployed to `qiskit.org/documentation`. 

```python
html_context = {
    'analytics_enabled': True
}
```

By enabling analytics we will be able to collect information on number of visits to each documentation page. It will also trigger the addition of a `Was this page helpful?` component at the bottom of each documentation page, so users will be able to provide yes/no feedback for each page.

<img width="538" alt="Screenshot 2022-11-14 at 11 28 11 AM" src="https://user-images.githubusercontent.com/23662430/201715694-1e75b1fb-875b-4137-b9f3-93d1e1894f5a.png">

If you do not enable analytics no data will be collected and the `Was this page helpful?` component will not show.

