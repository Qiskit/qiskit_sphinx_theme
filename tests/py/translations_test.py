import pytest

from qiskit_sphinx_theme.translations import get_language_label, get_translation_url


@pytest.mark.parametrize(
    "docs_url_prefix,page,expected",
    [
        ("documentation", "index", "/documentation/index.html"),
        ("documentation", "subdir/my_page", "/documentation/subdir/my_page.html"),
        ("ecosystem/finance", "index", "/ecosystem/finance/index.html"),
        ("ecosystem/finance", "subdir/my_page", "/ecosystem/finance/subdir/my_page.html"),
    ]
)
def test_get_translation_url_default_language(
    docs_url_prefix: str, page: str, expected: str
) -> None:
    """For the default language (English), we leave off /locale from the URL."""
    assert get_translation_url(
        docs_url_prefix=docs_url_prefix, language_code="en", pagename=page
    ) == expected


@pytest.mark.parametrize(
    "docs_url_prefix,page,expected",
    [
        ("documentation", "index", "/documentation/locale/fr_FR/index.html"),
        ("documentation", "subdir/my_page", "/documentation/locale/fr_FR/subdir/my_page.html"),
        ("ecosystem/finance", "index", "/ecosystem/finance/locale/fr_FR/index.html"),
        (
            "ecosystem/finance",
            "subdir/my_page",
            "/ecosystem/finance/locale/fr_FR/subdir/my_page.html",
        ),
    ]
)
def test_get_translation_url_translated_language(
    docs_url_prefix: str, page: str, expected: str
) -> None:
    """For translations, the URL should include /locale/<code>/."""
    assert get_translation_url(
        docs_url_prefix=docs_url_prefix, language_code="fr_FR", pagename=page
    ) == expected


@pytest.mark.parametrize(
    "language_code,expected",
    [
        ("bn_BN", "Bengali"),
        ("fr_FR", "French"),
        ("en", "English"),
        # If the language code cannot be found, we set the label to that code.
        ("unknown_code", "unknown_code"),
    ]
)
def test_get_language_label(language_code: str, expected: str) -> None:
    """Look up the label corresponding to the language_code."""
    translations_list = [
        ('en', 'English'),
        ('bn_BN', 'Bengali'),
        ('fr_FR', 'French'),
    ]
    assert get_language_label(language_code, translations_list) == expected
