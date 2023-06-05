"""Check that our vendored web components are identical between the different themes."""

from pathlib import Path


def test_top_nav_bar():
    furo = Path("qiskit_sphinx_theme/furo/base/static/js/web-components/top-nav-bar.js").read_text(
        "utf-8"
    )
    pytorch = Path(
        "qiskit_sphinx_theme/pytorch_base/static/js/web-components/top-nav-bar.js"
    ).read_text("utf-8")
    assert furo == pytorch
