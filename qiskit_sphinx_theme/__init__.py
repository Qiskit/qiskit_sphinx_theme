"""Pytorch Sphinx theme.

"""
from os import path
from warnings import warn

__version__ = '1.11.0rc1'
__version_full__ = __version__


def get_html_theme_path():
    """Return the absolute path to this package.

    This is traditionally used to set the option `html_theme_path`, but that should not be
    necessary. If you install the `qiskit_sphinx_theme` via pip, you only need to set `html_theme`.
    """
    warn(
        "`qiskit_sphinx_theme.get_html_theme_path()` is deprecated and will be removed in version "
        "1.12 of the package. We are adding multiple 'variants' / theme names to the package, so "
        "the function no longer makes semantic sense.\n\n"
        "It should not be necessary to set the option `html_theme_path`; you only need to set "
        "`html_theme`. See https://github.com/Qiskit/qiskit-finance/pull/244 for an example.",
        stacklevel=2,
        category=DeprecationWarning,
    )
    cur_dir = path.abspath(path.dirname(path.dirname(__file__)))
    return cur_dir


# See https://www.sphinx-doc.org/en/master/development/theming.html
def setup(app):
    app.add_html_theme('qiskit_sphinx_theme', path.abspath(path.dirname(__file__)))

    # return explicit parallel safe
    return {'parallel_read_safe': True, 'parallel_write_safe': True}
