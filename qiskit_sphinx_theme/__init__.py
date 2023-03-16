"""Pytorch Sphinx theme."""

from pathlib import Path
from warnings import warn

__version__ = '1.11.0rc1'
__version_full__ = __version__


def _get_theme_absolute_path(folder_name: str) -> str:
    path = Path(__file__).parent / folder_name
    return str(path.resolve())


def get_html_theme_path():
    """Return the absolute path to this package.

    This is traditionally used to set the option `html_theme_path`, but that should not be
    necessary. If you install the `qiskit_sphinx_theme` via pip, you only need to set `html_theme`.
    """
    warn(
        "`qiskit_sphinx_theme.get_html_theme_path()` is deprecated and will be removed in version "
        "1.13 of the package. We are adding multiple 'variants' / theme names to the package, so "
        "the function no longer makes semantic sense.\n\n"
        "It should not be necessary to set the option `html_theme_path`; you only need to set "
        "`html_theme`. See https://github.com/Qiskit/qiskit-finance/pull/244 for an example.",
        stacklevel=2,
        category=DeprecationWarning,
    )
    return _get_theme_absolute_path("pytorch_base")


# See https://www.sphinx-doc.org/en/master/development/theming.html
def setup(app):
    legacy_pytorch_theme = _get_theme_absolute_path("pytorch_base")
    app.add_html_theme('qiskit_sphinx_theme', legacy_pytorch_theme)
    app.add_html_theme('qiskit_core__legacy_pytorch', legacy_pytorch_theme)

    return {'parallel_read_safe': True, 'parallel_write_safe': True}
