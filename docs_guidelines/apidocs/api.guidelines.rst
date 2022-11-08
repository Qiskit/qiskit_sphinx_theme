########################
API Reference Guidelines
########################

1. Put code examples in doc string
==================================

We are mainly using ``jupyter-execute`` directive for putting code examples. We will investigate using
``doctest`` to replace ``jupyter-execute`` in the future wherever it's possible to reduce doc building
process complexity. See `qiskit-terra#7661 <https://github.com/Qiskit/qiskit-terra/issues/7661>`_
for discussions.

1.1 One cell for each example but without repeated imports
----------------------------------------------------------

That's because these cells are all in one Jupyter kernel session. It will make code examples look
cleaner. And if users want to use only one of the examples, they just need to copy all the imports
from previous cells.

1.2 Add at most 3 examples, covering most commonly used features
----------------------------------------------------------------

Try to demonstrate multiple features in one example.

1.3 Use minimal required imports to show examples
-------------------------------------------------

2. Put common things in the module level documentation
======================================================

To minimize duplication of content, put common things in the module level api page instead
of class, method, function level api page. For example, `qiskit-terra#8569
<https://github.com/Qiskit/qiskit-terra/pull/8569>`_ added common usage explanations and code
examples to qiskit.visualization module level api page.
