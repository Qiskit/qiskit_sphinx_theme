from setuptools import setup

setup(
    name='qiskit_sphinx_theme',
    version='1.11.0rc1',
    author="Qiskit Development Team",
    author_email="hello@qiskit.org",
    url="https://github.com/Qiskit/qiskit_sphinx_theme",
    description="A Sphinx theme for Qiskit that is based on the Pytorch Sphinx theme.",
    py_modules=[],
    packages=[
        "qiskit_sphinx_theme",
        "qiskit_sphinx_theme.static.css",
        "qiskit_sphinx_theme.static.images",
        "qiskit_sphinx_theme.static.js",
    ],
    include_package_data=True,
    entry_points={
        'sphinx.html_themes': [
            'qiskit_sphinx_theme = qiskit_sphinx_theme',
        ],
    },
    license='Apache 2',
    classifiers=[
        "Development Status :: 5 - Production/Stable",
        "Environment :: Web Environment",
        "Intended Audience :: Developers",
        "Intended Audience :: System Administrators",
        "License :: OSI Approved :: Apache Software License",
        "Operating System :: OS Independent",
        "Programming Language :: Python",
        "Topic :: Internet",
        "Topic :: Software Development :: Documentation",
        "Framework :: Sphinx :: Theme",
    ],
    install_requires=[
       'sphinx'
    ],
    project_urls={
        "Bug Tracker": "https://github.com/Qiskit/qiskit_sphinx_theme/issues",
        "Source Code": "https://github.com/Qiskit/qiskit_sphinx_theme",
    },
)
