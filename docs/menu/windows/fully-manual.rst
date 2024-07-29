Windows - Fully manual installation guide
================================

.. tip::
    You can copy and paste all code in the grey code blocks below by hovering your mouse over the block and pressing the icon in the top right.


Step 1: Install Miniconda
--------------------------

First ting you need to do is download Miniconda. This is done by going to `this website  <https://docs.anaconda.com/free/miniconda/index.html>`_ , where
you scroll down to Latest Miniconda installer links.
Here you need to click and download Miniconda3 Windows 64-bit.
Then you need to follow the instructions during the installations. Make sure to cross of all the
options regarding **PATH** ect


Step 2: Install Python:
-------------------------

If you are unsure on how to open Powershell, it can be done by opening the menu bar and searching
for Windows Powershell. Once you see Windows Powershell, on the right hand side you can select
Run as administrator. If not, right-click on the icon and select Run as administrator.

Now run the following commands in powershell one at a time by pasting them into the terminal and pressing enter:

.. code-block::

    conda install python=3.11 --yes

.. code-block::

    conda install -c conda-forge dtumathtools uncertainties


Step 3: Install VS Code:
-------------------------

After the installation is finished, you need to download Visual Studio Code. This is done by going
to `this website  <https://code.visualstudio.com>`_. Click the download button and follow the instructions.

Open Visual Studio Code and select the Extensions tab on the left. Here search for Python, and
download the extension. Make sure that it's from Microsoft. Hereafter search for Jupyter, and
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