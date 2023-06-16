from setuptools import find_namespace_packages, setup

setup(
    name='qiskit_sphinx_theme',
    version="1.12.1",
    author="Qiskit Development Team",
    author_email="hello@qiskit.org",
    url="https://github.com/Qiskit/qiskit_sphinx_theme",
    description="A Sphinx theme for Qiskit that is based on the Pytorch Sphinx theme.",
    packages=find_namespace_packages(include=["qiskit_sphinx_theme*"]),
    include_package_data=True,
    entry_points={
        'sphinx.html_themes': [
            'qiskit_sphinx_theme = qiskit_sphinx_theme',
            '_qiskit_furo = qiskit_sphinx_theme',
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
        "docutils",
        "sphinx",
        "sphinxcontrib-jquery",  # Remove once we get rid of the Pytorch theme.
    ],
    project_urls={
        "Bug Tracker": "https://github.com/Qiskit/qiskit_sphinx_theme/issues",
        "Source Code": "https://github.com/Qiskit/qiskit_sphinx_theme",
    },
)
