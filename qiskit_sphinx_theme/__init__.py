"""Pytorch Sphinx theme.

"""
from os import path

__version__ = '1.8.6'
__version_full__ = __version__

LINKS = {
    'qiskit_org': {
        'label': 'Qiskit home page',
        'url': 'https://qiskit.org'
    },
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
    'machine_learning': {
        'label': 'Machine learning',
        'url': 'https://qiskit.org/documentation/machine-learning',
        'path': 'machine-learning',
        'description': 'QSVM, VQC (Variational Quantum Classifier), and QGAN (Quantum Generative Adversarial Network) algorithms.'
    },
    'nature': {
        'label': 'Nature',
        'url': 'https://qiskit.org/documentation/nature',
        'path': 'nature',
        'description': 'Quantum applications in chemistry, physics, and biology.'
    },
    'finance': {
        'label': 'Finance',
        'url': 'https://qiskit.org/documentation/finance',
        'path': 'finance',
        'description': 'Uncertainty components for stock/securities problems, Ising translators for portfolio optimizations and data providers to source real or random data.'
    },
    'optimization': {
        'label': 'Optimization',
        'url': 'https://qiskit.org/documentation/optimization',
        'path': 'optimization',
        'description': 'High-level optimization problems that are ready to run on simulators and real quantum devices'
    },
    'experiments': {
        'label': 'Experiments',
        'url': 'https://qiskit.org/documentation/experiments',
        'path': 'experiments'
    },
    'slack_support': {
        'label': 'Slack support',
        'url': 'https://qiskit.slack.com'
    },
    'qiskit_textbook': {
        'label': 'Qiskit Textbook',
        'url': 'https://qiskit.org/textbook-beta'
    },
    'qiskit_events': {
        'label': 'Qiskit events',
        'url': 'https://qiskit.org/events'
    },
    'github': {
        'label': 'GitHub',
        'url': 'https://github.com/Qiskit/'
    }
}

applications_label = 'Applications'
APPLICATIONS_LINKS = {
  'label': applications_label,
  'children': [LINKS['machine_learning'], LINKS['nature'], LINKS['finance'], LINKS['optimization']]
}

resources_label = 'Resources'
RESOURCES_LINKS_DESKTOP = {
  'label': resources_label,
  'children': [LINKS['slack_support'], LINKS['qiskit_textbook'], LINKS['qiskit_events']]
}
RESOURCES_LINKS_MOBILE = {
  'label': resources_label,
  'children': [LINKS['slack_support']]
}


def get_html_theme_path():
    """Return list of HTML theme paths."""
    cur_dir = path.abspath(path.dirname(path.dirname(__file__)))
    return cur_dir

# See http://www.sphinx-doc.org/en/stable/theming.html#distribute-your-theme-as-a-python-package
def setup(app):
    app.add_html_theme('qiskit_sphinx_theme', path.abspath(path.dirname(__file__)))

    # return explicit parallel safe
    return {'parallel_read_safe': True, 'parallel_write_safe': True}
