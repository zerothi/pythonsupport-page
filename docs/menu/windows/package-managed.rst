Windows - Package managed installation guide
================================

.. tip::
    You can copy and paste all code in the grey code blocks below by hovering your mouse over the block and pressing the icon in the top right. 

Step 1: Install Chocolatey
---------------------------

Download the package manager Chocolatey. This is done very easily done by opening your Command Prompt as an administrator. This can be done by searching for *Powershell*. Once you see *Powershell*, on the right hand side you can select *Run as administrator*. If not, right-click and select *Run as administrator*.

Next thing you need to do is to paste the following line of code (the whole one) into Powershell, and execute:

.. code-block::

    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol
    = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadStri



Step 2: Install miniconda3
--------------------------

Once Chocolatey has been installed, open your terminal, paste the following, and press enter:

.. code-block::

    choco install miniconda3

After this you need to install the Anaconda Navigator. This is done by running the following line in your Powershell:

.. code-block::

    conda install anaconda-navigator –yes


Now run the following commands in terminal one at a time: 

.. code-block::

    conda install python=3.11 --yes

and 

.. code-block::

    conda install -c conda-forge dtumathtools uncertainties




Step 3: Install Visual Studio Code
----------------------------------

Now you need to install VS Code. This is done by pasting the following in you terminal and executing it: 
    
.. code-block::

    choco install vscode

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
When writing your password in the terminal, it will not show that you are writing. Don't worry, you are writing, you just need to type your password and press enter, and it is all good. If you are in doubt, you can check out the video guide.

You are always welcome to visit us at our office hours, or contact us via email or Discord. More information can be found at our homepage.
