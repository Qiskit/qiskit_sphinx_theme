==============
Inline classes
==============

This is a page to test out how we render classes and functions
included inline in the page. This is common with module pages.


Important APIs
==============

Every time you use this program, you'll want to create an instance of
:class:`api_example.inline_classes.SimpleInlineClass`. It has a simple interface:

.. autoclass:: api_example.inline_classes.SimpleInlineClass

It can be useful to use free functions rather than the class:

.. autofunction:: api_example.my_function
  :noindex:

Sometimes, you even need to use a really complex class!

.. autoclass:: api_example.inline_classes.InlineClassWithMethods
   :no-members:
   :show-inheritance:

   .. autoattribute:: CLASS_ATTRIBUTE
   .. autoattribute:: interest_rate

   .. automethod:: method1
   .. automethod:: method2


Warning: exceptions
-------------------

The above APIs might raise an exception! Be careful!

.. autoexception:: api_example.inline_classes.CustomException

Other prose
===========

Blah blah blah.