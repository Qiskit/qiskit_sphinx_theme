# qiskit_sphinx_theme
The Sphinx theme for the Qiskit documentation.

## Overview

This repository hosts three things: 
- Qiskit Sphinx theme (located in the [qiskit_sphinx_theme](`/qiskit_sphinx_theme/`) folder)
- Sample Docs (located in the [docs](`/docs`) folder)
- Qiskit Docs Guide (located in the [docs_guide](`/docs_guide/`) folder)

The Qiskit Sphinx Theme is the theme used by Qiskit
Documentation (https://qiskit.org/documentation/) site. It contains mainly front end elements that
gives the Qiskit design style.

The Sample Docs is a minimal Sphinx project that is used for testing the Qiskit Sphinx Theme. Every
pull request will trigger [a GitHub workflow](https://github.com/Qiskit/qiskit_sphinx_theme/blob/main/.github/workflows/main.yml) that builds the Sample Docs to make sure the changes do
not introduce unintended changes.

The Qiskit Docs Guide hosts instructions, guidelines and recommendations of good documentation
practices. It's intent is to help Qiskit maintainers improve the documentation of their projects.
The guide is hosted online here: https://qiskit.github.io/qiskit_sphinx_theme/.

## Installation

This package is available on PyPI using:

```bash
pip install qiskit-sphinx-theme
```

## Enable Qiskit.org Analytics

Qiskit.org uses Segment Analytics to collect information on traffic to sites under the qiskit.org domain. This is not enabled by default but if you would like to enable it you can add a `analytics_enabled` variable to the `html_context` object in your `conf.py`. Setting this to `True` will enable analytics for your site once it is deployed to `qiskit.org/documentation`. 

```
html_context = {
    'analytics_enabled': True
}
```

By enabling analytics we will be able to collect information on number of visits to each documentation page. It will also trigger the addition of a `Was this page helpful?` component at the bottom of each documentation page, so users will be able to provide yes/no feedback for each page.

<img width="538" alt="Screenshot 2022-11-14 at 11 28 11 AM" src="https://user-images.githubusercontent.com/23662430/201715694-1e75b1fb-875b-4137-b9f3-93d1e1894f5a.png">

If you do not enable analytics no data will be collected and the `Was this page helpful?` component
will not show.
