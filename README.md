# qiskit_sphinx_theme
The Sphinx theme for the Qiskit documentation.


## Installation

This package is available on PyPI using:

```bash
pip install qiskit-sphinx-theme
```

## Configure Left Sidebar

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
   GitHub <https://github.com/Qiskit/your-repo>
```

The above toctree will render a sidebar that looks like the image below:

<div style='display: flex; flex-direction: row'>
  <img style='padding-right: 20px' width="433" alt="Screenshot 2022-10-24 at 4 39 54 PM" src="https://user-images.githubusercontent.com/23662430/197626938-579dd934-682b-48ce-94e2-6b72e2026b4f.png">
  <img width="413" alt="Screenshot 2022-10-24 at 4 42 54 PM" src="https://user-images.githubusercontent.com/23662430/197626973-19e92720-fe4f-41b3-8db7-e96b994d9302.png">
</div>


Each item in the toctree corresponds to a single `.rst` file, and can use internal links or external. External links will have a "new tab" icon rendered next to them.

In addition to the pages in the toctree, the sidebar also adds:
- (optional) a dropdown at the bottom with links to previous releases, if you have a `version_list` setup in your `html_context` in your `conf.py` and corresponding logic in a `version_utils.py`
- (optional) a separate dropdown menu at the top with different languages, but only if you have a `translations_list` setup in your `html_context` in your `conf.py` corresponding logic in a `version_utils.py`.

### Add Custom Sidebar layout

In addition to the auto-generated `toctree` headings you may want to add your own custom sidebar headings.

- In `conf.py` you can set a custom structure for your sidebar by adding the `sidebar_headings` variable to `html_context`. You can include headings with or without subheadings.
- You must use the following object structure in your `sidebar_headings` variable to have the headings render correctly in the sidebar:

```
html_context = {
 ...
    'sidebar_headings': [
        {
            'title': 'Custom Heading 1 (no subheadings)',
            'url': 'images', # you can use a sphinx toctree reference
        },
        {
            'title': 'Custom Heading 2 (with subheadings)',
            'subheadings': [
                {
                    'title': 'Custom Subtitle 1 (external link)',
                    'url': 'https://google.com', # you can use an external url
                },
                {
                    'title': 'Custom Subtitle 2 (internal link)',
                    'url': 'tutorials',
                },
            ]
        },
    ]
}

```
- If you add the `sidebar_headings` variable your headings will display underneath the `toctree` generated headings. If you do not add the `sidebar_headings` variable to your `html_context` the sidebar will not include any custom headings, only those generated from the `toctree`.
- The code snippet example above will render a sidbar that looks like this:

<div style='display: flex; flex-direction: row'>
  <img style='padding-right: 20px' width="424" alt="Screenshot 2022-10-24 at 4 49 26 PM" src="https://user-images.githubusercontent.com/23662430/197626974-3b6e844d-4638-46d1-9474-017fc959159a.png">
  <img width="395" alt="Screenshot 2022-10-24 at 4 49 47 PM" src="https://user-images.githubusercontent.com/23662430/197626975-4d4caac3-9865-4bd7-b9eb-6d7f96f01145.png">
</div>