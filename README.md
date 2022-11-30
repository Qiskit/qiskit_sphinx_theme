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
   Tutorials <tutorials/index.rst>
   How-to Guides <how_to/index.rst>
   API Reference <apidocs/index.rst>
   Explanations <explanations/index.rst>
   Release Notes <release_notes>
   GitHub <https://github.com/Qiskit/your-repo>
```

The above toctree will render a sidebar that looks like the image below:

<img width="348" alt="Screenshot 2022-11-30 at 4 36 26 PM" src="https://user-images.githubusercontent.com/23662430/204913247-761b8202-1bb2-4233-9451-f180b00b5a12.png">



Each item in the toctree corresponds to a single `.rst` file, and can use internal links or external. External links will have a "new tab" icon rendered next to them.

<img width="323" alt="Screenshot 2022-11-30 at 4 24 42 PM" src="https://user-images.githubusercontent.com/23662430/204913498-f1baca0a-3557-4eed-a4c4-879c43ee9f03.png">

In addition to the pages in the toctree, the sidebar also adds:
- (optional) a separate dropdown menu *at the top* with different languages, but only if you have a `translations_list` setup in your `html_context` in your `conf.py` corresponding logic in a `version_utils.py`.
- (optional) a dropdown *at the bottom* with links to previous releases, if you have a `version_list` setup in your `html_context` in your `conf.py` and corresponding logic in a `version_utils.py`, e.g:
    <div style='display: flex; flex-direction: row'>
    <img style='padding-right: 20px' width="433" alt="Screenshot 2022-10-24 at 4 39 54 PM" src="https://user-images.githubusercontent.com/23662430/204913753-59458fa2-11d6-43e1-89c6-de575eed18a2.png">
    <img width="413" alt="Screenshot 2022-10-24 at 4 42 54 PM" src="https://user-images.githubusercontent.com/23662430/204913754-73ffec9c-914a-43b9-8e40-383c11017e7c.png">
    </div>

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
  <img style='padding-right: 20px' width="424" alt="Screenshot 2022-10-24 at 4 49 26 PM" src="https://user-images.githubusercontent.com/23662430/204912771-8a0c3134-2c8f-48be-bd98-2777f8d3e306.png">
  <img width="395" alt="Screenshot 2022-10-24 at 4 49 47 PM" src="https://user-images.githubusercontent.com/23662430/204912775-f706de32-1971-4377-9618-5a1ea8c882dd.png">
</div>

## Enable Qiskit.org Analytics

Qiskit.org uses Segment Analytics to collect information on traffic to sites under the qiskit.org domain. This is not enabled by default but if you would like to enable it you can add a `analytics_enabled` variable to the `html_context` object in your `conf.py`. Setting this to `True` will enable analytics for your site once it is deployed to `qiskit.org/documentation`. 

```
html_context = {
    'analytics_enabled': True
}
```

By enabling analytics we will be able to collect information on number of visits to each documentation page. It will also trigger the addition of a `Was this page helpful?` component at the bottom of each documentation page, so users will be able to provide yes/no feedback for each page.

<img width="538" alt="Screenshot 2022-11-14 at 11 28 11 AM" src="https://user-images.githubusercontent.com/23662430/201715694-1e75b1fb-875b-4137-b9f3-93d1e1894f5a.png">

If you do not enable analytics no data will be collected and the `Was this page helpful?` component will not show.
