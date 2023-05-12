=================
Custom Directives
=================

customcalloutitem
=================

.. raw:: html

   <div class="tutorials-callout-container">
      <div class="row">

.. customcalloutitem::
   :header: Go back to qiskit.org!
   :description: That's a cool site too :)
   :button_link:  https://qiskit.org
   :button_text: qiskit.org

.. raw:: html

      </div>
   </div>


customcarditem
==============

.. raw:: html

  <div id="tutorial-cards-container">
  <hr class="tutorials-hr">
  <div class="row">
  <div id="tutorial-cards">
  <div class="list">

..
  Note: To get the `image` working locally, we have to use a relative link like `../`. In
  production, it should simply be `_static/ibm_qlab.png.

.. customcarditem::
  :header: IBM Quantum Lab
  :card_description: Build quantum applications and experiments with Qiskit in a cloud programming environment.
  :image: ../_static/ibm_qlab.png
  :link: https://quantum-computing.ibm.com/

.. raw:: html

  </div>
  </div>
  </div>
  </div>
