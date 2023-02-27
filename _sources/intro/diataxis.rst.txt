.. _diataxis:

######################
The Diátaxis Framework
######################

.. include:: ../others/explanation_type.rst

What is Diátaxis?
=================

.. figure:: /images/diataxis.png
   :scale: 40 %
   :align: center

`Diátaxis <https://diataxis.fr>`_, whose name comes from the Ancient Greek δῐᾰ́τᾰξῐς: dia (“across”) and taxis (“arrangement”), is a framework for technical documentation that divides it into 4 categories according to
the users' needs. In particular, it focuses on two axes of knowledge: 

* `Theory/practice`: when the user needs theoretical knowledge or to follow practical steps to perform a task.
* `Acquisition/application`: when the documentation is to be used for study or for work, that is, for acquiring or applying knowledge.

According to those axes, documentation can be divided into:

* `Tutorials <https://diataxis.fr/tutorials/>`_: Practice and acquisition. A tutorial acts as a lesson in which the writer/teacher takes the user/pupil by the hand though the steps needed to complete a project. This project should be a meaningful exercise that the user can reasonably complete, getting a sense of achievement and confidence with both our product and their skills.
* `How-to guides <https://diataxis.fr/how-to-guides/>`_: Practice and application. A how-to guide is, broadly speaking, a recipe for completing a task. The user is expected to be already familiar with the task and why they may want to do it. You don't even need to start from the beginning but you can set a starting point that the user should know how to reach. You can present the different ways to approach the task but always focus on the action.
* `Reference <https://diataxis.fr/reference/>`_: Theory and application. The purpose of the reference is to describe, as simply and accurately as possible, how the software works. It is not tailored to any task but only to the product itself. It's recommended to add some code examples to the reference.
* `Explanation <https://diataxis.fr/explanation/>`_: Theory and acquisition. The intention behind explanatory material is to improve the users' understanding of a certain topic. It's there to answer why things are the way they are and what the implications are. Any context and connections to other subjects or concepts are welcome here, as we are not covering how to perform a task. Explanatory material must not instruct how to perform a task or give technical reference, that's what the other 3 types are for.

Why do we use Diátaxis in Qiskit?
=================================

The reasoning behind choosing Diátaxis for Qiskit's documentation is twofold: First and foremost,
Diátaxis focuses on prioritizing the users' needs and structures the documentation according to
them, so when the user has a specific need, they know where it's fulfilled. At the same time, it
gives the authors a clear direction for their documentation, highlighting where improvements can be
made so the user gets a better experience when working with Qiskit. 

Writing coherent documentation can be challenging and not every piece of information that is useful
to your users will fit exactly into one of the diataxis categories. This framework provides a
helpful guideline and attempts provide some consistency across different software packages, but as
with every framework there are edge cases that may not fit exactly. To create effective and
consistent docs try to keep these concepts in mind as best you can before you start writing, rather
than creating the content and trying to fit it to the framework afterwards. And as always, make sure
to focus on what key things you want your user to walk away with after consuming a piece of
documentation.



