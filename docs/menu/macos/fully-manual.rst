MacOS - Fully manual installation guide
=======================================

.. tip::
    You can copy and paste all code in the grey code blocks below by hovering your mouse over the block and pressing the icon in the top right.


Step 1: Download Miniconda
---------------------------

First thing you need to do is download Miniconda. This is done by going to `this website  <https://docs.anaconda.com/free/miniconda/index.html>`_, where
you scroll down to Latest Miniconda installer links. 
If you have an Intel processor you need to select Miniconda3 macOS Intel x86 64-bit pkg.
If you have an M processor you need to select Miniconda3 macOS Apple M1 64-bit pkg. Even if
you have an M2 or M3.
You can find out which processor you have by pressing the Apple logo an the top left of your
screen. Go to "About This Mac", and then under "Chip/Processor".
Then you need to follow the instructions from the package.

Step 2: Downloading Python
---------------------------

Now you need to open týour terminal. This is done by pressing the "command" and "space" key at the same time and searching for "terminal".
Copy and paste the following lines of cod einto your terminal and press enter one line at a time:

.. code-block::
        
    conda install python=3.11 --yes
    
.. code-block::

    conda install -c conda-forge dtumathtools uncertainties


Step 3: Set up VS Code
----------------------------

After the installation is finished, you need to download Visual Studio Code. This is done by going
to `this website  <https://code.visualstudio.com>`_. Click the download button and follow the instructions. 
Once downloaded make sure that the VSC app is under the APPS folder in finder.

 

Open Visual Studio Code and select the Extensions tab on the left. Here search for Python, and
download the extension. Make sure that it is from Microsoft. Hereafter search for Jupyter, and
download that extension as well. This also needs to be from Microsoft.


.. image:: /menu/images/macos-package-managed-python.png
      :width: 200
      :align: center

.. image:: /menu/images/macos-package-managed-jupyter.png
      :width: 200
      :align: center



Supporter's Notes
-----------------

You are always welcome to visit us at our office hours, or contact us via email or Discord. More information can be found at our homepage.

