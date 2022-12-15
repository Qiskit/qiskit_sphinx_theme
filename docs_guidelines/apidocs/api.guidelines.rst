########################
API Reference Guidelines
########################

.. note:: 
   
   We are mainly using ``jupyter-execute`` directive for including code examples. We will investigate 
   using ``doctest`` to replace ``jupyter-execute`` in the future wherever it's possible to reduce 
   doc building process complexity. See 
   `qiskit-terra#7661 <https://github.com/Qiskit/qiskit-terra/issues/7661>`_ for discussions.

1. Try to show as many arguments/options as possible within reason
==================================================================

Focus on the arguments that make bigger differences. If there are multiple arguments with similar functionality, show only
the ones with significant differences. For example, if you are using ``plot_histogram`` and want to
show different options of the ``sort`` argument, don't pick two that mostly do the same like
``value`` and ``value_desc``, pick one of them to show you can sort by probability and a completely
different one like ``hamming``.

To minimize duplication of content, put common things in the module level api page instead
of class, method, function level api page. For example, `qiskit-terra#8569
<https://github.com/Qiskit/qiskit-terra/pull/8569>`_ added common usage explanations and code
examples to ``qiskit.visualization`` module level API page.

2. Be reasonable with the amount of code examples/cells
=======================================================

If there are more than 4 arguments that make significant changes, it can be better to distribute
them evenly between 2 examples. That way you avoid having an overloaded example and a user can see
how some of the default values work. 

Avoid adding more than 3 code cells.

3. Don't over complicate nor oversimplify the steps to get the input arguments
==============================================================================

The priority should always be showing the object/function itself, not the many ways of obtaining
the input. So try to stick to the simplest way to show the desired functionality. 

If a more complicated input is useful to show some functionality, like creating a state with many different
amplitudes to show the different square sizes for a hinton diagram, do it but in the simplest way
possible (the fewest possible gates, use relatively common gates, avoid extra imports like numpy).

On the other side, make sure you are showing the full functionality.

4. Import only what's strictly needed when needed
=================================================

If you have more than one example, don't repeat the imports from the former examples. Only add the
ones that don't appear there. That's because these cells are all in one Jupyter kernel session. It will make code
examples look cleaner. And if users want to use only one of the examples, they just need to copy all
the imports from previous cells.

5. Make all the different examples self-contained (except for the imports) 
==========================================================================

Don't reuse variables like backends even if they are the same in more than one example. That way a
user can directly copy and paste the desired example without having to look carefully into the
variables of the rest.
