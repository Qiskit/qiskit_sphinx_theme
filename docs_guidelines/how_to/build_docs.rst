===========================
Build documentation locally
===========================

This guide shows how to build the documentation of a Qiskit repository in local.

Make necessary instalations
===========================

Before trying to build your documentation, make sure you have installed:

* The Qiskit package itself. ``qiskit_x``
* Other required packages from ``requirements-dev.txt``

Install the Qiskit package
--------------------------

Once you have cloned the ``qiskit-x`` repository with ``git clone https://github.com/Qiskit/qiskit-x.git``, you can install the ``qiskit_x`` package from source by going to the root directory of your local copy and running this on your console:

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

Build the documentation
=======================

Once you have installed every needed package in your virtual environment, you can build the documentation with `sphinx-build <https://www.sphinx-doc.org/en/master/man/sphinx-build.html>`_ the following way:

.. code-block:: bash

    sphinx-build -b html docs docs/_build/html

After that, the documentation you have built from the ``docs`` folder will be in ``docs/_build/html``.