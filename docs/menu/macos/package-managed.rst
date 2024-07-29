MacOS - Package managed installation guide
================================
.. tip::
    You can copy and paste all code in the grey code blocks below by hovering your mouse over the block and pressing the icon in the top right.

Step 1: Install Homebrew 
--------------------------
First you need to download the package manager Homebrew. This is done by going to `this <https://brew.sh>`_ website
and follow the instructions. Tip: The Homebrew website will ask you to open a terminal. This is
done by pressing the "command" and "space" buttons at the same time and searching for terminal

.. image:: /menu/images/macos-package-managed-homebrew.png
    :width: 400
    :align: center

Be aware that Homebrew will need to be added to path. when the installation is done, it will ask
you to copy, paste and run some code in the terminal

Step 2: Install Miniconda and Python
-------------------------------------

Once Homebrew has been installed, open your terminal and paste the following code and press
enter:

.. code-block::

    brew install --cask miniconda

Now run the following commands in terminal one at a time by inserting and pressing enter:

.. code-block::

    conda install python=3.11 -y
    
.. code-block::

    conda install -c conda-forge dtumathtools uncertainties
    


Step 3: Install VS Code 
--------------------------
After this you need to install Visual Studio Code. This is done by pasting the following in you
terminal and executing it:

.. code-block::

    brew install --cask visual-studio-code

Finally you need to install some extensions in visual studio code. This is done by pressing the
Extensions button on the left side. Here search for ``Python``, and download the extension. Make
sure that it is from Microsoft. Hereafter search for ``Jupyter``, and download that extension as
well. This also needs to be from Microsoft

.. image:: /menu/images/macos-package-managed-python.png
      :width: 200
      :align: center

.. image:: /menu/images/macos-package-managed-jupyter.png
      :width: 200
      :align: center


Supporter's Notes
-----------------
When writing your password in the terminal, it will not show that you are writing. Don't worry, you are writing, you just need to type your password and press enter, and it is all good. If you are in doubt, you can check out the video guide.

You are always welcome to visit us at our office hours, or contact us via email or Discord. More information can be found at our homepage.

