=======
Jupyter
=======

One-line block (https://github.com/Qiskit/qiskit_sphinx_theme/issues/306).

.. jupyter-input::

    python -m pip install qiskit-sphinx-theme

Basic plot
==========

.. jupyter-execute::

    import numpy as np 
    import matplotlib.pyplot as plt 

    x = np.linspace(0, 2*np.pi, 100)
    y = np.sin(x)
    plt.plot(x,y);
