# qiskit_sphinx_theme
The Sphinx theme for the Qiskit documentation.


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

If you do not enable analytics no data will be collected and the `Was this page helpful?` component will not show.

## Toctree visibility

When creating a toctree in Sphinx, it is possible to add a `:hidden:` directive to hide those headings from the page. When using this theme any toctrees using the `:hidden:` directive will NOT show those headings either in the centre page toctree list OR in the sidebar. Toctrees without the `:hidden:` directive will be displayed in the sidebar but will NOT be displayed in the centre page toctree list. 

For example, see below an `index.rst` with different toctree types and corresponding layout using the theme:

```
###########################################
Qiskit sphinx theme |version| documentation
###########################################



.. toctree::
  :maxdepth: 1
  :caption: Basic functionality

   Structural formatting <sphinx_guide/structural>
   Paragraph-level markup <sphinx_guide/paragraph>
   Lists and tables <sphinx_guide/lists_tables>
   Functions <sphinx_guide/functions>
   Classes <sphinx_guide/classes>
   Images <sphinx_guide/images>
   Jupyter <sphinx_guide/jupyter>
   Panels <sphinx_guide/panels>

   .. these headings are included in the toc tree but hidden from the sidebar:
.. toctree::
  :maxdepth: 1
  :hidden:

   hiddenTitle1 <sphinx_guide/structural>
   hiddenTitle2 <sphinx_guide/paragraph>
   hiddenTitle3 <sphinx_guide/lists_tables>


.. Hiding - Indices and tables
   :ref:`genindex`
   :ref:`modindex`
   :ref:`search`
```

<img width="1135" alt="Screenshot 2023-01-17 at 11 26 53 AM" src="https://user-images.githubusercontent.com/23662430/212863759-96a753cf-8c44-493b-a519-8022887b609d.png">

If you want the toctree list displayed in the centre page section as well as the sidebar you can do so by adding a `custom.css` file in your `docs/_static` directory, then adding the following custom CSS to that file:

```
.toctree-wrapper.compound {
  display: unset;
}
```

Using the `index.rst` example from earlier, adding this custom CSS this will show the following:

<img width="1133" alt="Screenshot 2023-01-17 at 11 26 00 AM" src="https://user-images.githubusercontent.com/23662430/212864931-1bbb4aec-5923-4eb4-9d50-36a55150e9e7.png">