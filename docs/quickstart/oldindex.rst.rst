
.. _quickstart:

Install Python
===============

In this section, you will find two different installation guides that cover the 
same components (Python, packages, conda, and Visual Studio Code) but are tailored 
for different needs: one for beginners and one for advanced students.

Importantly, these installation guides are specifically designed for students who meet at least one of the following criteria:

- First-year Bachelor students at DTU
- Students taking Mathematics 1a/1b (course numbers: 01001 and 01002 in Danish, 01003 and 01004 in English)
- Students taking Computer Programming (course numbers: 02002 in Danish, 02003 in English)

---------------------------
Package managed installation guide - Recommended for 1\ :sup:`st`\  year students
---------------------------

For **first-year students** or those new to programming, 
using package managers is the best option for ensuring a 
smooth and stable software setup. They check for conflicts, 
ensure the correct versions are installed, and simplify uninstallation, 
leaving no residual files. Issues like running VSCode from the ‘Downloads’ 
folder on MacOS can be avoided entirely with package manager installations.

.. raw:: html

   <p><a href="javascript:void(0);" class="custom-link" onclick="PyS_redirectUser('package-managed.html');">
       Click here for the package managed installation guide recommended for 1<sup>st</sup> year students.
   </a></p>
   
---------------------------
Fully manual installation guide - Recommended for advanced users
---------------------------

For intermediate or advanced users, the fully manual installation guide offers detailed steps for setting up Python, packages, conda, and Visual Studio Code without relying on package managers. This approach provides greater flexibility and control over the installation process, making it ideal for users with more experience and specific configuration needs.

.. raw:: html

   <p><a href="javascript:void(0);" class="custom-link" onclick="PyS_redirectUser('fully-manual.html');">
       Click here for the fully manual installation guide.
   </a></p>




.. comments to be back-filled

   Following these steps will quickly give you a minimal functioning Python installation.
   These steps follow the recommended DTU procedure ({{pref_symbol}}).

   .. grid:: 1
      :gutter: 1

      .. grid-item-card:: 1. Install Python

         Download and install Python {{python_version}} from `here <python-org-down_>`__

         | **Important**: For Windows users, ensure to :far:`square-check` the ``Add Python {{python_version}} to PATH`` box.
         | Go `here <install-python>`_ if you encounter problems.

      .. grid-item-card:: 2. Install VSCode 

         Download from `here <https://code.visualstudio.com/download>`__

         Then `add extensions <https://code.visualstudio.com/docs/editor/extension-marketplace>`__.
         Find the ``Python`` extension which is verified (:fas:`certificate`) by Microsoft.

         Ensure your `Python interpreter <https://code.visualstudio.com/docs/python/environments#_manually-specify-an-interpreter>`__ points to the just installed Python version.

      .. grid-item-card:: 3. Virtual Environments (recommendation!)
         :link: pip-venv-env
         :link-type: ref

         Please use virtual environments so your Python codes works across courses.

         Press this for information.



.. toctree::
   :caption: All available guides can be found below 
   :maxdepth: 1

   Automated installation for MacOS <../menu/macos/automated.rst>
   Manual installation for MacOs <../menu/macos/fully-manual.rst>
   Package managed installation for MacOS <../menu/macos/package-managed.rst>
   Automated installation for Windows <../menu/windows/automated.rst>
   Manual installation for Windows <../menu/windows/fully-manual.rst>

   
