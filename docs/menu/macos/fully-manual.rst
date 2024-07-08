MacOS - Fully manual installation guide
================================

.. tip::
    You can copy and paste all code in the grey code blocks below by hovering your mouse over the block and pressing the icon in the top right.

Step 1: Download and install miniconda
--------------------------------------

Go to `Anaconda Website <https://docs.anaconda.com/free/miniconda/index.html>`_, where you scroll down to ``Latest Miniconda installer links``.

* If you have an **Intel processor** you need to select ``Miniconda3 macOS Intel x86 64-bit pkg``.

* If you have an **M processor** you need to select ``Miniconda3 macOS Apple M1 64-bit pkg``. Even if you have an M2 or M3. 


You can find out which processor you have by pressing the Apple logo on the top left of your screen, about this Mac, and then under Processor. Then you need to follow the instructions from the package. 

Step 2: Install Anaconda navigator
--------------------------------------

Run the following line in your terminal:

.. code-block::

    conda install anaconda-navigator

If you are unsure on how to open your terminal, it can be done by pressing command + space. There after search ``terminal``.

Now run the following commands in terminal one at a time: 

.. code-block::

    CODIGO

and 

.. code-block::

    pip3 install dtumathtools uncertainties


Step 3: Install Visual Studio Code
--------------------------------------

This is done by going to `Visual Studio Code Webpage <https://code.visualstudio.com>`_. Click the download button and follow the instructions. Once downloaded make sure that the VSC app is under the APPS folder in finder. 

Open VSC and select the Extensions tab on the left, or press command + shift + X. Here search for Python, and download the extension. **Make sure that it's from Microsoft**. Hereafter search for Jupyter, and download that extension as well. This also needs to be from Microsoft.



