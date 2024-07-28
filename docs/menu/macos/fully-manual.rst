MacOS - Fully manual installation guide
================================

.. tip::
    You can copy and paste all code in the grey code blocks below by hovering your mouse over the block and pressing the icon in the top right.

Step 1: Download and install Miniconda
--------------------------------------

First thing you need to do is download Miniconda. This is done by going to `this <https://docs.anaconda.com/free/miniconda/index.html>`_  website, where you scroll down to Latest Miniconda installer links.

If you have an Intel processor, you need to select *Miniconda3 macOS Intel x86 64-bit pkg*.

If you have an M processor, you need to select *Miniconda3 macOS Apple M1 64-bit pkg*, even if you have an M2 or M3. You can find out which processor you have by pressing the Apple logo on the top left of your screen, about this Mac, and then under Processor.

Then you need to follow the instructions of the installer.

Step 2: Install Anaconda Navigator
----------------------------------

After installing Miniconda, you need to install the Anaconda Navigator. This is done by running the following line in your terminal:

.. code-block::

    conda install anaconda-navigator –yes

If you are unsure on how to open your terminal, it can be done by pressing ``command + space``, and searching for ``terminal``.

Now run the following commands in the terminal one at a time: 

.. code-block::

    conda install python=3.11 –yes

and 

.. code-block::

    conda install -c conda-forge dtumathtools uncertainties


Step 3: Install Visual Studio Code
--------------------------------------

.. |applications| image:: /menu/images/macos-applications.png
    :height: 25px

After the installation of Anaconda Navigator finished, you need to download Visual Studio Code. This is done by going to `this <https://docs.anaconda.com/free/miniconda/index.html>`_ website. Click the download button and follow the instructions.

Once the installation is completed, make sure that the Visual Studio Code (VSC) app is under the |applications| folder in Finder. 

Step 4: Install extensions for Visual Studio Code
-------------------------------------------------

.. |extensions| image:: /menu/images/extensions.png
    :height: 25px

Finally, you need to install some extensions in Visual Studio Code. This is done by pressing the 
``Extensions`` |extensions| button on the left side, or pressing ``command + shift + X``. 

Here, search for Python, and download the extension. Make sure that it's from Microsoft. 

.. image:: /menu/images/macos-package-managed-python.png
      :width: 200
      :align: center


Then, search for Jupyter, and download that extension as well. Make sure that it's from Microsoft as well.

.. image:: /menu/images/macos-package-managed-jupyter.png
      :width: 200
      :align: center

You are always welcome to visit us at our office hours, or contact us via email or Discord. More information can be found at our homepage.



