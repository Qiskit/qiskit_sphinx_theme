# qiskit_sphinx_theme
The Sphinx theme for the Qiskit documentation.


## Installation

This package is available on PyPI using:

```bash
pip install qiskit-sphinx-theme
```

## Configure a Custom Sidebar Layout

To keep UX/UI similar across different Qiskit packages we strongly encourage the following structure for you sidebar, which can be set in the toctree of your `index.rst`:

```
.. toctree::
  :maxdepth: 1
  :hidden:

   Overview <overview>
   Getting Started <getting_started>
   Tutorials <tutorials>
   How-to Guides <how_to>
   API Reference <apidocs>
   Explanations <explanations>
   Release Notes <release_notes>
   GitHub <https://github.com/Qiskit/qiskit_sphinx_theme>
```

The above toctree will render a sidebar that looks like the image below:

INSERT IMAGE

Each item in the toctree corresponds to a single `.rst` file and is represented as one top level heading in the sidebar. The subheadings in the sidebar are pulled directly from the subheadings of the correseponding `.rst` file. By setting the `:maxdepth:` attribute you can define how many layers of subheadings you have. If you want no subheadings set `:maxdepth: 1`.

In addition to the pages in the toctree, the sidebar also adds:
- (optional) a dropdown with links to previous releases, if you have a `version_list` in your `conf.py`

## Configure a Custom Sidebar Layout

- In `conf.py` you can set a custom structure for your sidebar by adding the `sidebar_headings` variable to `html_context`

- If you do not add the `sidebar_headings` variable to your `html_context` the sidebar will populate the structure based on the tocree set in your `index.rst`.