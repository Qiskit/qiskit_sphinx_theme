.. _how_to_use_this_guide:

=====================
How to Use This Guide
=====================

The first thing you need to do to use this guide is to set up a documentation project. If you haven't done so, check :doc:`this tutorial <new_doc_project>`.

In Qiskit we are using a documentation framework called `Diátaxis <https://diataxis.fr>`_. It divides documentation according to the user's needs in the following categories:

* `Tutorials <https://diataxis.fr/tutorials/>`_: practical steps for learning.
* `How-to guides <https://diataxis.fr/how-to-guides/>`_: practical steps for work.
* `Reference <https://diataxis.fr/reference/>`_: theoretical information for work.
* `Explanation <https://diataxis.fr/explanation/>`_: theoretical information for learning.

For more details about what each documentation category means, check :ref:`this page <diataxis>`.

This guide includes a section for each one of these types: :ref:`tutorials`, :ref:`how_to`, :ref:`apidocs` and :ref:`explanations`. Each section includes content-related guidelines for writing the corresponding document type, as well as existing examples and the instructions needed to
include it in your documentation. That also means that this guide is not actually implementing `Diátaxis <https://diataxis.fr>`_, so, for example,
the :ref:`tutorials` section is not made up of tutorials, even though you can find examples there.

Similarly, the :ref:`overview`, :ref:`getting_started` and :ref:`release_notes` pages will contain information about how to write this kind of files instead of being actual instances of them.

It's possible that what you are looking for is not how to deal with the content of your documentation but with the more technical details of creating documentation with :doc:`Sphinx <sphinx:index>`, the documentation builder we are using in Qiskit.
If that's the case, check the :ref:`sphinx_guide` section. There you will find explanatory material about Sphinx and ReStructuredText (Sphinx's native language), as well as guides for Sphinx-related tasks such as
building documentation, structuring it with different headers and lists and including links and technical expressions like code blocks or mathematic formulae.