Windows - Fully manual installation guide
================================

.. tip::
    You can copy and paste all code in the grey code blocks below by hovering your mouse over the block and pressing the icon in the top right.

Step 1: Install Miniconda
--------------------------

First thing you need to do is download Miniconda. This is done by going to `this <https://docs.anaconda.com/free/miniconda/index.html>`_  website, where you scoll down to *Latest Miniconda installer links*.

Here, you need to click and download *Miniconda3 Windows 64-bit*.

Then, you need to follow the instructions from the package.

Step 2: Install Anaconda Navigator
----------------------------------

After this you need to install the Anaconda Navigator. This is done by running the following line in your Powershell:

.. code-block::

    conda install anaconda-navigator –yes


If you are unsure on how to open the *Powershell*, it can be done by searching for *Powershell*. Once you see *Powershell*, on the right hand side you can select 
*Run as administrator*. If not, right-click and select *Run as administrator*.

Now run the following commands in your *Powershell* one at a time: 

.. code-block::

    conda install python=3.11 –yes

and 

.. code-block::

    conda install -c conda-forge dtumathtools uncertainties


Step 3: Install Visual Studio Code
--------------------------------------

After the installation is finished, you need to download Visual Studio Code. This is done by going to `this <https://code.visualstudio.com>`_. Click the download button and follow the instructions. 


Step 4: Install extensions for Visual Studio Code
-------------------------------------------------

.. |extensions| image:: /menu/images/extensions.png
    :height: 25px

Finally, you need to install some extensions in Visual Studio Code. This is done by pressing the 
``Extensions`` |extensions| button on the left side, or pressing ``Control + Shift + X``. 

Here, search for Python, and download the extension. Make sure that it's from Microsoft. 

.. image:: /menu/images/macos-package-managed-python.png
      :width: 200
      :align: center


Then, search for Jupyter, and download that extension as well. Make sure that it's from Microsoft as well.

.. image:: /menu/images/macos-package-managed-jupyter.png
      :width: 200
      :align: center

Supporter's Notes
-----------------

You are always welcome to visit us at our office hours, or contact us via email or Discord. More information can be found at our homepage.
