.. pythonsupport documentation master file, created by
   sphinx-quickstart on Mon Aug  7 12:41:08 2023.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

.. meta::
   :description: Technical University of Denmark (DTU) Python Installation Support
   :keywords: dtudk, dtu, support, python, python3, pip, pip3, conda, venv, virtualenv

.. todolist::


**DTU Python Installation Support**
===============================


Welcome to the DTU Python Installation student support unit!  
We are here to help you with Python installation problems related
to courses at DTU.


.. card:: Need to install Python?
   :class-card: sd-color-primary

   Here you can find important information to get started once python is installed

   .. button-link:: essentials_first/index.html
      :color: secondary
      :expand:
      :click-parent:

      
         Press here for essentials!



Our goal is to ensure that students can get a Python
environment up and running according to the needs of DTU courses.  
Help can be requested through various channels:

--------
Reach us
--------

.. grid:: 1 1 1 3
   :gutter: 1

   .. grid-item-card:: :fas:`person-running` -- Visit us
      :link: office-hours
      :link-type: doc

      You can find us at building **302**, room **92** {{online_days}}. See our office hours here.

   .. grid-item-card:: :fas:`envelope` -- E-mail us
      :link: mailto:pythonsupport@dtu.dk
      :link-type: url

      | You can contact us via email at pythonsupport@dtu.dk.

   .. grid-item-card:: :fab:`discord` -- Chat with us
      :link: https://discord.gg/h8EVaV9ShP
      :link-type: url

      | Join our Discord channel to reach us online, even after normal working hours.


------------
Office hours
   we will have physical presence at DTU Lyngby campus on differing locations
   depending on the used lecture rooms in the Polytechnical Foundation courses.
   See further down for our locations during specific weeks of the semester.
   This page will be updated continuously.

Mail -- :mail:`pythonsupport@dtu.dk`  |  {{online_days}} in the evening
   Outside of office hours (during the semester) we can be contacted through emails.
   We strive to return answers as soon as possible.

Discord -- `channel <ps-discord-general_>`_ and `invite link <ps-discord-invite_>`_  |  {{online_days}} in the evening
   Our support team will also be present on the Discord chat service during the semester.

   Using the Discord channel requires signing up to Discord's terms, DTU
   has no control over Discord and how they use your data. If you feel uncomfortable
   about signing up, please use the email or the physical meet-ups.


.. include:: /timetable/index.rst


.. note::

   Currently we only support installation problems related
   to Python (it self) and packages required in specific courses.
   These are the Polytechnical Foundation courses:
   
   - :course-base:`01001`, :course-base:`01002`, :course-base:`01003` and :course-base:`01004`
     Mathematics 1
   - :course-base:`02002` and :course-base:`02003`
     Computer Programming
   - :course-base:`02402`
     Statistics
   - :course-base:`10060`, :course-base:`10063` and :course-base:`10065`
     Physics
   - :course-base:`26020`, :course-base:`26021` and :course-base:`26022`
     Chemistry
   - :course-base:`27020`
     Bioengineering
   - :course-base:`42620`, :course-base:`42622`
     Science, Technology and Society
   - :course-base:`42500`, :course-base:`42501`, :course-base:`42504`
     Innovation in Engineering
   - :course-base:`12100`
     Quantitative Sustainability

   Many more will come! Our support unit is new, and we wish to figure
   out what the need is among our students, please do not hesitate
   to contact us regarding other courses, we will use it to understand the
   need for Python support at DTU.

.. toctree::
<<<<<<< Updated upstream
   :maxdepth: 2
   :hidden:


   essentials_first/index.rst
   courses/index.rst
   menu/index.rst
   faqs/index.rst
=======
    :maxdepth: 2
    :hidden:

    essentials_first/index.rst
    courses/index.rst
    menu/index.rst
    faqs/index.rst
>>>>>>> Stashed changes

.. toctree::
   :maxdepth: 2
   :hidden:
   :caption: Advanced usage
   
   python/pip.rst
   python/conda.rst
   os/index.rst
   ides/index.rst
   python/environments.rst
   python/uninstall.rst
   src/about.rst

.. toctree::
   :maxdepth: 1
   :hidden:
   :caption: Supported functionalities

   {{python_version_min}} -- {{python_version_max}} <python/supported.rst>
   Conda <python/supported.rst>
   Python.org <python/supported.rst>
   Virtual Environments <python/supported.rst>
