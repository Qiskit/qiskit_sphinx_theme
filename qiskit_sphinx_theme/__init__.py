"""Pytorch Sphinx theme.

"""
from os import path
from signal import raise_signal

__version__ = '1.8.6'
__version_full__ = __version__

qiskit_org_link = {
    'label': 'Qiskit home page',
    'url': 'https://qiskit.org'
}

machine_learning_link = {
    'label': 'Machine learning',
    'url': 'https://qiskit.org/documentation/machine-learning',
    'path': 'machine-learning',
    'description': 'QSVM, VQC (Variational Quantum Classifier), and QGAN (Quantum Generative Adversarial Network) algorithms.'
}

nature_link = {
    'label': 'Nature',
    'url': 'https://qiskit.org/documentation/nature',
    'path': 'nature',
    'description': 'Quantum applications in chemistry, physics, and biology.'
}

finance_link = {
    'label': 'Finance',
    'url': 'https://qiskit.org/documentation/finance',
    'path': 'finance',
    'description': 'Uncertainty components for stock/securities problems, Ising translators for portfolio optimizations and data providers to source real or random data.'
}

optimization_link = {
    'label': 'Optimization',
    'url': 'https://qiskit.org/documentation/optimization',
    'path': 'optimization',
    'description': 'High-level optimization problems that are ready to run on simulators and real quantum devices'
}

applications_links = {
  'label': 'Applications',
  'children': [
    machine_learning_link,
    nature_link,
    finance_link,
    optimization_link
  ]
}

resources_label = 'Resources'

slack_support_link = {
    'label': 'Slack support',
    'url': 'https://qiskit.slack.com'
}

qiskit_textbook_link = {
    'label': 'Qiskit Textbook',
    'url': 'https://qiskit.org/textbook-beta'
}

qiskit_events_link = {
    'label': 'Qiskit events',
    'url': 'https://qiskit.org/events'
}

resources_desktop = {
  'label': resources_label,
  'children': [slack_support_link, qiskit_textbook_link, qiskit_events_link]
}

resources_mobile = {
  'label': resources_label,
  'children': [slack_support_link]
}

LINKS = {
    'qiskit_org': qiskit_org_link,
    'getting_started': {
        'label': 'Getting Started',
        'path': 'getting_started'
    },
    'tutorials': {
        'label': 'Tutorials',
        'path': 'tutorials'
    },
    'partners': {
        'label': 'Partners',
        'url': 'https://qiskit.org/documentation/partners',
        'path': 'partners'
    },
    'applications': applications_links,
    'experiments': {
        'label': 'Experiments',
        'url': 'https://qiskit.org/documentation/experiments',
        'path': 'experiments'
    },
    'slack_support': slack_support_link,
    'qiskit_textbook': qiskit_textbook_link,
    'qiskit_events': qiskit_events_link,
    'github': {
        'label': 'GitHub',
        'url': 'https://github.com/Qiskit/'
    },
    'resources_desktop': {
        'label': resources_label,
        'children': [slack_support_link, qiskit_textbook_link, qiskit_events_link]
    },
    'resources_mobile': {
        'label': resources_label,
        'children': [slack_support_link]
    }
}

def get_html_theme_path():
    """Return list of HTML theme paths."""
    cur_dir = path.abspath(path.dirname(path.dirname(__file__)))
    return cur_dir

def get_theme_link(current_link):
    return LINKS[current_link]

def maps_to_theme_links(app, config):
    theme_options = config.html_theme_options or {}

    theme_qiskit_org_link = theme_options.get('qiskit_org_link') and get_theme_link('qiskit_org') or {}
    config.html_theme_options['qiskit_org_link'] = theme_qiskit_org_link

    theme_top_menu_links = list(map(lambda top_menu_link: LINKS[top_menu_link], theme_options.get('top_menu_links')))
    config.html_theme_options['top_menu_links'] = theme_top_menu_links

# See http://www.sphinx-doc.org/en/stable/theming.html#distribute-your-theme-as-a-python-package
def setup(app):
    app.connect('config-inited', maps_to_theme_links)
    app.add_html_theme('qiskit_sphinx_theme', path.abspath(path.dirname(__file__)))

    # return explicit parallel safe
    return {'parallel_read_safe': True, 'parallel_write_safe': True}
