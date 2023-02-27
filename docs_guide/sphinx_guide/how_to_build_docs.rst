##################################
How to build documentation locally
##################################

.. include:: ../others/how-to_type.rst

This guide shows how to build the documentation of your project in a local machine.

Pre-requisites
==============

This guide assumes your project already has a working Sphinx documentation project in a folder called ``docs``. If you don't have it, you can set it up with
:doc:`sphinx-quickstart <sphinx:man/sphinx-quickstart>`.

Install package and dependencies
================================

Before trying to build your documentation, make sure you have installed:

* The project you want to build, that in this guide will be called ``qiskit_x``.
* Other required packages from the corresponding ``requirements-dev.txt``.

Install the Qiskit package
--------------------------

Once you have cloned the ``qiskit-x`` repository with ``git clone https://github.com/<your
user/organization name>/qiskit-x.git``, you can install the ``qiskit_x`` package from source by going to
the root directory of your local copy and running this on your console:

.. code-block:: bash

    pip install .

If you prefer to install the editable version, so you don't have to reinstall each time the code from the project is changed, you can write:

.. code-block:: bash

    pip install -e .

Install required packages
-------------------------

Apart from installing the ``qiskit_x`` package, there are other needed packages for development. They are included in the ``requirements-dev.txt`` files of the repository. You can install the packages from those files with:

.. code-block:: bash

    pip install -r requirements-dev.txt

However, there can also be some other necessary packages that are not Python, and therefore not installable with ``pip``, like `pandoc <https://pandoc.org/>`_ or graphviz `graphviz <https://graphviz.org/>`_.
You can install them with `apt-get install <https://linux.die.net/man/8/apt-get>`_:

.. code-block:: bash

    sudo apt-get install other_packages


Build the documentation
=======================

Once you have installed every needed package in your virtual environment, you can build the documentation with :doc:`sphinx:man/sphinx-build` the following way:

.. code-block:: bash

    sphinx-build -b html docs docs/_build/html

After that, the documentation you have built from the ``docs`` folder will be in ``docs/_build/html``.

Shortcuts
=========

There are also some shortcuts for all or part of this process that can be made by modifying certain files. This guide will focus on the full process
but you can remove any lines you don't want to automatice. This shortcuts are:

* ``make html``
* ``tox -edocs``

``make html``
--------------

In order to build your documentation with ``make html`` you need to include the following lines in your ``Makefile``.

.. code-block:: text

    html:
        pip install -r requirements-dev.txt
        sudo apt-get install -y other_packages
        sphinx-build -b html docs docs/_build

``tox -edocs``
---------------

If you want to use ``tox -edocs`` to build your documentation with `tox <https://tox.wiki/en/latest/>`_, you can include the following in your ``tox.ini`` file:

.. code-block:: text

    [testenv:docs]
    envdir = .tox/docs
    basepython = python3
    deps =
        -r{toxinidir}/requirements-dev.txt
        other_dependencies
    commands =
        sphinx-build -b html {posargs} {toxinidir}/docs {toxinidir}/docs/_build/html

the variable ``toxinidir`` is the path to your ``tox.ini``, that should be in the root directory of your repository.
