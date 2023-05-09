from qiskit_sphinx_theme.previous_releases import get_previous_versions_url


def test_get_previous_versions_url() -> None:
    assert get_previous_versions_url(
        "documentation", "0.23"
    ) == "/documentation/stable/0.23/index.html"
    assert get_previous_versions_url(
        "ecosystem/finance", "0.5"
    ) == "/ecosystem/finance/stable/0.5/index.html"
