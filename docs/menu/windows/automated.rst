Windows - Automated installation guide
================================

.. tip::
    You can copy and paste all code in the grey code blocks below by hovering your mouse over the block and pressing the icon in the top right.


#. 

    The first thing you need to do is to open Powershell as an administrator. This can be done
    by opening the menu bar, then search for *Windows Powershell*. Once you see Windows
    Powershell, on the right hand side you can select *Run as administrator*. If not, right-click the
    icon and select *Run as administrator*

#. 
    Next you need to copy the following line of code into your terminal and press enter:

    .. code-block::

        PowerShell -ExecutionPolicy Bypass -Command "& {Invoke-Expression (Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/dtudk/pythonsupport-scripts/main/AutoInstallWindows.ps1' -UseBasicParsing).Content}"

#.
    Wait until you see *Script finished*

Once the script is finished, Python and Visual Studio Code will be ready to use
