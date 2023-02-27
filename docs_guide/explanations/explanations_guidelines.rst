######################
Explanation Guidelines
######################

1. Make connections
===================

Try to link what you are explaining to any mildly related term/key word.

For example bring up the concept of endianness when discussing the order of qubits in Qiskit.

2. Provide context
==================

Talk about why the thing you are explaining is the way it is.

3. Provide every significant mathematical/physical detail related to the topic
==============================================================================

Formulas, terminology, processes,...

4. Discuss the implications
===========================

If there is any meaningful impact of what you are explaining, discuss it here. Also provide some
illustrative examples if possible.

5. Discuss and compare any alternatives/opinions
================================================

6. Ideally, the title of your explanation should admit an "about" or "about the" at the start
=============================================================================================

Order of qubits in Qiskit -> About the order of qubits in Qiskit

7. Avoid explaining how to perform a task
=========================================

This is what tutorials and how-to guides are for.

8. Avoid going into the details of any particular class, function, method, ... 
==============================================================================

This is what :ref:`API reference <apidocs>` is for. However it's fine to mention for example a particular argument if
it helps with the explanation. For example, show how to change the order of qubits to the one in
textbooks with the ``reverse_bits`` argument of the ``QuantumCircuit.draw`` method.