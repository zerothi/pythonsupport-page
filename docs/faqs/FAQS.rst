Frequently Asked Questions
==========================


Can i use virutal environments with VS Code?
""""""""""""""""""""""""""""""""""""""""""""

   This is particularly tricky configuration since it depends
   on the way you have setup VS Code.

   VS Code works in two ways:

   .. card:: A special folder with custom VS Code configurations
      :link: https://code.visualstudio.com/docs/editor/workspaces
      :link-type: url

      **Workspaces**
      ^^^^^^^^^^^^^^

      Basically if your ``EXPLORER`` shows a top folder name according
      to a folder, you will be working in a workspace.

      One cannot change the interpreter in VS Code workspaces (as one
      would generally do.

      In this case you can only get virtual environments to work by
      following this:

      1. Open the VS Code terminal (press :kbd:`Ctrl-Shift-P`, or :kbd:`Command-Shift-P` on Mac)
         and search for ``python env``, select the menu
         ``Python: Create Environment``
      2. Now two additional options open up, choose ``Venv``
      3. Wait until it is done.
      4. Execute a single line of code, e.g. ``exit()`` + :kbd:`Shift-Enter`
         to force the virtual environment being activated in the terminal
         associated with the workspace (you should see that the left of the
         terminal shows ``.venv``). Then it will execute the ``exit()`` code and
         return to the terminal.

         Alternatively you can press the :fas:`play` button to run the currently opened
         script.

      .. warning::
         The terminal will *not* be in the virtual environment if VS Code is freshly
         opened **and** you have not executed any Python code.

      Click this box to get information about workspaces.


   .. card:: Single file scripts
      :link: https://code.visualstudio.com/docs/python/environments#_manually-specify-an-interpreter
      :link-type: url
      
      **File editing**
      ^^^^^^^^^^^^^^^^^

      If not in a *workspace* (see above), you can freely select the interpreter.
   
      If you have a Python file open (extension ``.py``), you will see a ``Python``
      block at the bottom right. To the right of this small box, you can press
      a button which lets you choose the interpreter.

      This should be a full path to the python interpreter (a Python executable).
      There will generally be a list of Python executables present to choose
      from, if your wanted interpreter is not present, you'll have to
      navigate manually to the wanted interpreter.

      Click this box to get additional details regarding changing the interpreter.
