MacOS - Package managed installation guide
================================
.. tip::
    You can copy and paste all code in the grey code blocks below by hovering your mouse over the block and pressing the icon in the top right.

Step 1: Install Homebrew
-------------------------

First, you need to download the package manager Homebrew. This is done by going to `this <https://brew.sh>`_ website and following the instructions.

Start by opening your terminal. This can be done by pressing ``cmd`` + ``space`` and then searching for terminal.

Paste the following line of code into your terminal and press ``enter``. 

.. code-block:: 
        
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" 


To check if you have Homebrew installed, you can simply run the following vommand in your terminal:

.. code-block:: 

    brew --version


You should get an output stating the installed Homebrew version. The output can look something like *"Homebrew 4.3.5"*. However, you may have a different version number.


Step 2: Download Miniconda and Anaconda Navigator
-------------------------------------------------

Once Homebrew has been installed, open your Terminal, paste the following code and press ``enter``:

.. code-block:: 
        
    brew install –cask miniconda


After this, you need to install the Anaconda Navigator. This is done by running the following line in your terminal:

.. code-block:: 

    conda install anaconda-navigator –yes


Now run the following commands in the terminal one at a time:

.. code-block:: 

    conda install python=3.11 –yes


and

.. code-block:: 

    conda install -c conda-forge dtumathtools uncertainties


Step 3: Install Visual Studio Code
----------------------------------

After the Conda installations, you need to install Visual Studio Code. This is done by pasting the following line in you terminal and executing it:

.. code-block::    

    brew install –cask visual-studio-code


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


Supporter's Notes
-----------------
When writing your password in the terminal, it will not show that you are writing. Don't worry, you are writing, you just need to type your password and press enter, and it is all good. If you are in doubt, you can check out the video guide.

You are always welcome to visit us at our office hours, or contact us via email or Discord. More information can be found at our homepage.
