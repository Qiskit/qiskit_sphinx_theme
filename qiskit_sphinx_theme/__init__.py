"""Pytorch Sphinx theme.

"""
from os import path
from signal import raise_signal

__version__ = '1.8.6'
__version_full__ = __version__

QISKIT_ORG = 'https://qiskit.org'
QISKIT_MACHINE_LEARNING_DOCS = 'https://qiskit.org/documentation/machine-learning'
QISKIT_NATURE_DOCS = 'https://qiskit.org/documentation/nature'
QISKIT_FINANCE_DOCS = 'https://qiskit.org/documentation/finance'
QISKIT_OPTIMIZATION_DOCS = 'https://qiskit.org/documentation/optimization'
QISKIT_SLACK = 'https://qiskit.slack.com'
QISKIT_TEXTBOOK = 'https://qiskit.org/textbook-beta'
QISKIT_EVENTS = 'https://qiskit.org/events'
QISKIT_PARTNERS_DOCS = 'https://qiskit.org/documentation/partners'
QISKIT_EXPERIMENTS_DOCS = 'https://qiskit.org/documentation/experiments'
QISKIT_ORGANIZATION_GITHUB = 'https://github.com/Qiskit/'

QISKIT_ORG_LINK = {
    'label': 'Qiskit home page',
    'url': QISKIT_ORG
}

TOP_MENU_LINKS = {
    'qiskit_core_getting_started': {
        'label': 'Getting Started',
        'path': 'getting_started'
    },
    'qiskit_core_tutorials': {
        'label': 'Tutorials',
        'path': 'tutorials'
    },
    'qiskit_partners': {
        'label': 'Partners',
        'url': QISKIT_PARTNERS_DOCS,
    },
    'qiskit_applications': {
        'label': 'Applications',
        'children': [
            {
                'label': 'Machine learning',
                'url': QISKIT_MACHINE_LEARNING_DOCS,
                'description': 'QSVM, VQC (Variational Quantum Classifier), and QGAN (Quantum Generative Adversarial Network) algorithms.'
            },
            {
                'label': 'Nature',
                'url': QISKIT_NATURE_DOCS,
                'description': 'Quantum applications in chemistry, physics, and biology.'
            },
            {
                'label': 'Finance',
                'url': QISKIT_FINANCE_DOCS,
                'description': 'Uncertainty components for stock/securities problems, Ising translators for portfolio optimizations and data providers to source real or random data.'
            },
            {
                'label': 'Optimization',
                'url': QISKIT_OPTIMIZATION_DOCS,
                'description': 'High-level optimization problems that are ready to run on simulators and real quantum devices'
            }
        ]
    },
    'qiskit_experiments': {
        'label': 'Experiments',
        'url': QISKIT_EXPERIMENTS_DOCS,
    },
    'resources': {
        'label': 'Resources',
        'children': [
            {
                'label': 'Slack support',
                'url': QISKIT_SLACK
            },
            {
                'label': 'Qiskit Textbook',
                'url': QISKIT_TEXTBOOK
            },
            {
                'label': 'Qiskit events',
                'url': QISKIT_EVENTS
            }
        ]
    },
    'qiskit_organization_github': {
        'label': 'GitHub',
        'url': QISKIT_ORGANIZATION_GITHUB
    }
}

def get_html_theme_path():
    """Return list of HTML theme paths."""
    cur_dir = path.abspath(path.dirname(path.dirname(__file__)))
    return cur_dir

def map_to_theme_links(app, config):
    """Map the theme options given in the config file to links"""
    theme_options = config.html_theme_options or {}

    theme_top_menu_links = list(map(lambda top_menu_link: TOP_MENU_LINKS[top_menu_link], theme_options.get('top_menu_links')))
    config.html_theme_options['top_menu_links'] = theme_top_menu_links

def include_additional_theme_links(app, config):
    """Include other useful links on the theme"""
    config.html_theme_options['qiskit_org_link'] = QISKIT_ORG_LINK

# See https://www.sphinx-doc.org/en/master/development/theming.html#distribute-your-theme-as-a-python-package
def setup(app):
    app.connect('config-inited', map_to_theme_links)
    app.connect('config-inited', include_additional_theme_links)
    app.add_html_theme('qiskit_sphinx_theme', path.abspath(path.dirname(__file__)))

    # return explicit parallel safe
    return {'parallel_read_safe': True, 'parallel_write_safe': True}
