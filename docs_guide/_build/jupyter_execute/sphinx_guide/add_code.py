#!/usr/bin/env python
# coding: utf-8

# In[1]:


from qiskit import QuantumCircuit

qc = QuantumCircuit(2)
qc.h(0)
qc.cx(0,1)
qc.draw('mpl')

