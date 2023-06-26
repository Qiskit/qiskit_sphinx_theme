from setuptools import setup

setup(
    name="qiskit_sphinx_theme",
    version="1.12.0rc1",
    author="Qiskit Development Team",
    author_email="hello@qiskit.org",
    url="https://github.com/Qiskit/qiskit_sphinx_theme",
    description="A Sphinx theme for Qiskit that is based on the Pytorch Sphinx theme.",
    include_package_data=True,
    entry_points={
        "sphinx.html_themes": [
            "qiskit_sphinx_theme = qiskit_sphinx_theme",
            "_qiskit_furo = qiskit_sphinx_theme",
        ],
    },
    license="Apache 2",
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
        "docutils",
        # Keep in sync with Furo's constraint.
        "sphinx>=6.0",
        # Remove jQuery once we get rid of the Pytorch theme.
        "sphinxcontrib-jquery",
        # See CONTRIBUTING.md for how to upgrade Furo.
        "furo==2023.5.20",
    ],
    project_urls={
        "Bug Tracker": "https://github.com/Qiskit/qiskit_sphinx_theme/issues",
        "Source Code": "https://github.com/Qiskit/qiskit_sphinx_theme",
    },
)
