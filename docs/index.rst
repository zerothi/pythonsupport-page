.. pythonsupport documentation master file, created by
   sphinx-quickstart on Mon Aug  7 12:41:08 2023.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

.. meta::
   :description: Technical University of Denmark (DTU) Python Installation Support
   :keywords: dtudk, dtu, support, python, python3, pip, pip3, conda, venv, virtualenv

.. todolist::


DTU Python Installation Support
===============================


Welcome to the DTU Python Installation student support unit!  
We are here to help you with Python installation problems related
to courses at DTU.



.. raw:: html

    <style>
        .image-container {
            position: relative;
            text-align: center;
            color: white;
            margin-bottom: 20px; /* Create space below the image */
        }

        .image-container img {
            width: 100%;
            height: auto;
            border-radius: 15px; /* Rounded corners for the image */
        }

        .top-text, .bottom-text {
            position: absolute;
            font-size: 27px;
            color: white;
        }

        .top-text-bold, .bottom-text-bold {
            font-size: 36px;
            font-weight: bold;
        }

        .top-text {
            top: 15%;
            left: 7.5%;
            
        }

        .top-link {
            top: 32%;
            left: 52%;
        }

        .bottom-text {
            top: 65%;
            left: 7.5%;
        }

        .bottom-link {
            top: 82%;
            left: 52%;
        }

        .special-hover a:hover {
            color: yellow; /* Change this to your desired hover color */
        }
    </style>

    <div class="image-container">
        <img src="_static/try15.png" alt="Background Image">
        <div class="top-text top-text-bold">
            Need to install Python?
        </div>
        <div class="top-text top-link">
            <a href="quickstart/index.html" style="color: white; text-decoration: none;">Click here to install Python</a>
        </div>
        <div class="bottom-text bottom-text-bold">
            Essentials for 1<sup>st</sup> year students
        </div>
        <div class="bottom-text bottom-link special-hover">
            <a href="essentials_first/index.html" style="color: white; text-decoration: none;">Press here for essentials!</a>
        </div>
    </div>

.. raw:: html
      :file: html/popup.html

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
------------
 
.. include:: /timetable/timetables.rst

*Available via online channels (e-mail and Discord) during all office hours.*


.. .. todo::


.. toctree::
   :maxdepth: 2
   :hidden:

   quickstart/index.rst
   essentials_first/index.rst
   courses/index.rst
   menu/index.rst
   faqs/index.rst
