from qiskit_sphinx_theme.translations import get_language_label, get_translation_url


def test_get_translation_url() -> None:
    assert get_translation_url(
        content_prefix_option="", code="en", pagename="index"
    ) == "/index.html"
    assert get_translation_url(
        content_prefix_option="", code="fr_FR", pagename="index"
    ) == "/locale/fr_FR/index.html"

    assert get_translation_url(
        content_prefix_option="", code="en", pagename="subdir/my_page"
    ) == "/subdir/my_page.html"
    assert get_translation_url(
        content_prefix_option="", code="fr_FR", pagename="subdir/my_page"
    ) == "/locale/fr_FR/subdir/my_page.html"

    assert get_translation_url(
        content_prefix_option="ecosystem/finance", code="en", pagename="index"
    ) == "/ecosystem/finance/index.html"
    assert get_translation_url(
        content_prefix_option="ecosystem/finance", code="fr_FR", pagename="index"
    ) == "/ecosystem/finance/locale/fr_FR/index.html"

    assert get_translation_url(
        content_prefix_option="ecosystem/finance", code="en", pagename="subdir/my_page"
    ) == "/ecosystem/finance/subdir/my_page.html"
    assert get_translation_url(
        content_prefix_option="ecosystem/finance", code="fr_FR", pagename="subdir/my_page"
    ) == "/ecosystem/finance/locale/fr_FR/subdir/my_page.html"


def test_get_language_label() -> None:
    translations_list = [
        ('en', 'English'),
        ('bn_BN', 'Bengali'),
        ('fr_FR', 'French'),
    ]
    assert get_language_label("bn_BN", translations_list) == "Bengali"
    assert get_language_label("fr_FR", translations_list) == "French"
    assert get_language_label("en", translations_list) == "English"

    # If the language code cannot be found, we set the label to that code.
    assert get_language_label("unknown_code", translations_list) == "unknown_code"
    # If the language is not set in config, we use the default.
    assert get_language_label(None, translations_list) == "English"
