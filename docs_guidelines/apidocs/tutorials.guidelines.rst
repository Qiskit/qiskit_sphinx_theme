####################
Tutorials Guidelines
####################

1. Get the user started
=======================

1.1 Lower the barrier of entry 
------------------------------

Lower the barrier of entry as much as possible. Assume the user does not know much about what is
covered in the tutorial. If we are expecting users to know something, make it explicit and link them
to the needed explanations (See :ref:`tutorial-guidelines-minimum-explanation`) Avoid jargon as much as possible. Provide a minimum
necessary explanation when the jargon is introduced. (See :ref:`tutorial-guidelines-minimum-explanation`)
 
1.2 Provide setup / prerequisites
---------------------------------

1.3 Add sufficient comments to code
-----------------------------------

2. Provide a complete picture before they start
===============================================

2.1 Provide overview at the start
---------------------------------

Summarize what the tutorial is about in the first paragraph, ideally the first sentence

    "In this tutorial, you will..."

2.2 Provide context
-------------------

Add a context for why you want to do this tutorial? Or who is this tutorial for?

2.3 Summarize at the end
------------------------

Summarize what the user has accomplished at the end of the tutorial

    "You have built a secure, three-layer hylomorphic stasis engine…" Describe (and admire, in a 
    mild way) what your learner has accomplished (note - not: “you have learned…”)

3. Ensure that the tutorial works reliably and repeatable
=========================================================

3.1 Test tutorials regularly
----------------------------

on supported platform and python / Qiskit versions (for example, via CI
tests)

4. Ensure the user sees results immediately
===========================================

4.1 Every step should produce a result
--------------------------------------

Every step the learner follows should produce a comprehensible result, however small. It can 
be a print statement showing a variable, a plot, etc.
        
    "The output should look something like this…"

4.2 Each step should be brief
-----------------------------
Ideally each step should not take longer than a minute. If it is longer than that, please consider
ways to show intermediate results of the step, or at least make them aware that it takes a while, otherwise users will start worrying that
something is going wrong.


5. Don't try to teach
=====================

5.1 Provide concrete steps
--------------------------

Describe concrete steps, not abstract concepts, ignore options and alternatives.

5.2 Use titles or transition sentences to make steps more obvious
-----------------------------------------------------------------
    
Titles for steps should be an action not a noun.

    "First, do x. Now, do y. Now that you have done y, do z."

5.3 Do not generalize
---------------------

Focus on the particular instance of the case you want to demonstrate, do not generalize / provide
abstractions.

.. _tutorial-guidelines-minimum-explanation:

6. Offer only minimum, necessary, explanation
=============================================

6.1 Explain exactly what's needed
---------------------------------

Try to explain exactly what's needed to get the steps done AND for the user understand
everything they're doing and why they are doing it in the first place. No more, no less.  

6.2 Provide links if needed
---------------------------

Link to further explanatory material if and only if it's really needed. Try not to add too
many links because they will interrupt the flow of a tutorial by digressing into explanation.
    
    "We must always do x before we do y because… (see Explanation for more details).
