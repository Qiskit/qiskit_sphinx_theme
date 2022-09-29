####################
Tutorials Guidelines
####################

1. Get the user started
=======================

Lower the barrier of entry 
--------------------------

as much as possible. Assume the user does not know much about what is covered in the tutorial. If we
are expecting users to know something, make it explicit and link them to the needed explanations
(See point 6) Avoid jargon as much as possible. Provide a minimum necessary explanation when the
jargon is introduced. (See point 6)
 
Provide setup / prerequisites
-----------------------------

Add sufficient comments to code
-------------------------------

2. Provide a complete picture before they start
===============================================

Summarize what the tutorial is about in the first paragraph, ideally the first sentence
---------------------------------------------------------------------------------------
    
"In this tutorial, you will..."

Add a context for why you want to do this tutorial? Or who is this tutorial for?
--------------------------------------------------------------------------------

Summarize what the user has accomplished at the end of the tutorial
-------------------------------------------------------------------

"You have built a secure, three-layer hylomorphic stasis engine…" Describe (and admire, in a mild
way) what your learner has accomplished (note - not: “you have learned…”)

3. Ensure that the tutorial works reliably and repeatable
=========================================================

Test tutorials regularly
------------------------

on supported platform and python / Qiskit versions (for example, via CI
tests) 

4. Ensure the user sees results immediately
===========================================

Every step should produce a result
----------------------------------

Every step the learner follows should produce a comprehensible result, however small. It can 
be a print statement showing a variable, a plot, etc.
        
"The output should look something like this…"

Ideally each step should be done within a minute
------------------------------------------------
If it is longer than that, please consider ways to show intermediate results of the step, otherwise
users do not start worrying about somethings are going wrong.


5. Don't try to teach
=====================

Describe concrete steps, not abstract concepts, Ignore options and alternatives

Provide concrete steps
----------------------

Use titles or transition sentences to make steps more obvious
-------------------------------------------------------------
    
Titles for steps should be an action not a noun

"First, do x. Now, do y. Now that you have done y, do z."

Do not generalize
-----------------

Focus on the particular instance of the case you want to demonstrate, do not generalize / provide
abstractions.

6. Offer only minimum, necessary, explanation
=============================================

Explain exactly what's needed
-----------------------------

Try to explain exactly what's needed to get the steps done AND  for the user understand
everything they're doing and why they are doing it in the first place. No more no less.   

Provide links if needed
-----------------------

Link to further explanatory material if and only if it's really needed. Try not to add too
many links. Because they will interrupt the flow of a tutorial by digressing into explanation.
    
"We must always do x before we do y because… (see Explanation for more details).
