"""Pytorch Sphinx theme.

"""
from os import path

__version__ = '1.11.1'
__version_full__ = __version__


def get_html_theme_path():
    """Return list of HTML theme paths."""
    cur_dir = path.abspath(path.dirname(path.dirname(__file__)))
    return cur_dir

# See http://www.sphinx-doc.org/en/stable/theming.html#distribute-your-theme-as-a-python-package
def setup(app):
    # Sphinx 6 stopped including jQuery by default. Our Pytorch theme depend on jQuery,
    # so install it for our users automatically.
    app.setup_extension("sphinxcontrib.jquery")

    app.add_html_theme('qiskit_sphinx_theme', path.abspath(path.dirname(__file__)))

    # return explicit parallel safe
    return {'parallel_read_safe': True, 'parallel_write_safe': True}
