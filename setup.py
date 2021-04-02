"""qiskit_sphinx_theme

A Sphinx theme for Qiskit that is based on the
Pytorch Sphinx theme.
"""
from setuptools import setup

DOCLINES = __doc__.split('\n')
DESCRIPTION = DOCLINES[0]
LONG_DESCRIPTION = "\n".join(DOCLINES[2:])

setup(
    name = 'qiskit_sphinx_theme',
    version = '1.8.1',
    author = 'nonhermitian',
    author_email= 'nonhermitian@gmail.com',
    url="https://github.com/Qiskit/qiskit_sphinx_theme",
    description=DESCRIPTION,
    long_description=LONG_DESCRIPTION,
    py_modules = ['qiskit_sphinx_theme'],
    packages = ['qiskit_sphinx_theme'],
    include_package_data=True,
    zip_safe=False,
    package_data={'qiskit_sphinx_theme': [
        'theme.conf',
        '*.html',
        'static/css/*.css',
        'static/js/*.js',
        'static/images/*.*',
        'theme_variables.jinja'
    ]},
    entry_points = {
        'sphinx.html_themes': [
            'qiskit_sphinx_theme = qiskit_sphinx_theme',
        ]
    },
    license= 'Apache 2',
    classifiers=[
        "Development Status :: 5 - Production/Stable",
        "Environment :: Web Environment",
        "Intended Audience :: Developers",
        "Intended Audience :: System Administrators",
        "License :: OSI Approved :: Apache Software License",
        "Operating System :: OS Independent",
        "Programming Language :: Python",
        "Topic :: Internet",
        "Topic :: Software Development :: Documentation"
    ],
    install_requires=[
       'sphinx'
    ],
    project_urls={
        "Bug Tracker": "https://github.com/Qiskit/qiskit_sphinx_theme/issues",
        "Source Code": "https://github.com/Qiskit/qiskit_sphinx_theme",
    },
)
