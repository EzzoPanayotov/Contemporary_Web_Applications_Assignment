<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Apache License 2.0][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/EzzoPanayotov/Solent-forum">
    <img src="public/Images/solentLogo.svg" alt="Logo" width="150" height="150">
  </a>

<h3 align="center">Solent Forum</h3>

  <p align="center">
  A forum to help Solent University students get information/advice from other students.
    <br />
    <a href="https://solent-forum.netlify.app/no-user">View Demo</a>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

### Built With

* [React](https://reactjs.org/)
* [Firebase](https://firebase.google.com/)

<!-- GETTING STARTED -->
## Getting Started

If you want to get and set up this project on your local machine follow the steps below.

### Prerequisites

* Install [Node.js](https://nodejs.org/en/) 
* Install NPM
  
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the project repository
   ```sh
   git clone https://github.com/EzzoPanayotov/Solent-forum.git
   ```
    **Note:** if you are a **tutor** grading this project, you can **go to Step 3** if you want. 
2. If you have a [firebase](https://firebase.google.com/) account follow the steps below.
   * Create a firebase project **(name can be anything)** and disable google analytics.

   * Add firebase to the web app **(name can be anything)** and register the web app.

   * Upon registering the web app you will be presented with **API keys** within the ***firebaseConfig*** object, make sure to keep a note of them.

   * Create a **.env.local** file in the **root** directory of the project.

   * Copy all variables that start with **"REACT_APP"** within the **"Firebase.js"** file and paste them in the **.env.local** file.

   * Assign each **"REACT_APP"** variable a corresponding value **(the values should be your API keys)**, for example:
        ```sh
        REACT_APP_FIREBASE_API_KEY=AIzaSyArJOU7ubBVEtSoatjtfjCEGOpHZXOecbQ
        REACT_APP_FIREBASE_AUTH_DOMAIN=example-project-5e95a.firebaseapp.com
        REACT_APP_FIREBASE_PROJECT_ID=example-project-5e95a
        REACT_APP_FIREBASE_STORAGE_BUCKET=example-project-5e95a.appspot.com
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID=738963904934
        REACT_APP_FIREBASE_APP_ID=1:738963904934:web:f059daabca63117daa1767
        ```
    * When done with **.env.local** file, navigate to the ***Authentication*** tab in firebase and enable ***"Email/Password"*** Sign-in-method.

    * Then navigate to the ***Firestore Database*** tab, and create a database in **production mode**, after the database has been created navigate to the ***Rules*** tab within the database and change:
        ```sh
            allow read, write: if false;
             # To
            allow read, write: if true;
        ```  
    * Finally navigate to the ***Storage*** tab, and within it navigate to the ***Rules*** tab and change:
        ```sh
            allow read, write: if false;
            # To
            allow read, write: if true;
        ```

3. If you don't have a [firebase](https://firebase.google.com/) account or you don't want to use it follow the steps below.

    * Create a ***.env.local*** file in the **root** directory of the project, and pase the following:

        **Note:** the code below is provided so the tutor grading this project is able to run it without having to complete **Step 2**.<br/>
        After the project has been graded **This step** is going to be **removed**, because it poses a **huge security risk**.
        ```sh
        REACT_APP_FIREBASE_API_KEY=AIzaSyCkjB0f1Oa3l19IevDJ1MqzG_-uYL2wuuE
        REACT_APP_FIREBASE_AUTH_DOMAIN=solent-forum-assignment.firebaseapp.com
        REACT_APP_FIREBASE_PROJECT_ID=solent-forum-assignment
        REACT_APP_FIREBASE_STORAGE_BUCKET=solent-forum-assignment.appspot.com
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID=599024243548
        REACT_APP_FIREBASE_APP_ID=1:599024243548:web:dc4df9083cd3122143e799
        ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Start the local server and open project
   ```sh
   npm start
   ```

<!-- USAGE EXAMPLES -->
## Usage

For the usage and purpose of this project check the ***[Documentation](https://example.com)***.

<!-- ROADMAP -->
## Roadmap

- Register/Login System :heavy_check_mark:
- Allow users to upload a profile picture :heavy_check_mark:
- Create, Update, Delete Operations for posts (for users with a profile only) :heavy_check_mark:
- Read Posts :heavy_check_mark:
- Search for posts :x:
- Post interactions :x:

<!-- LICENSE -->
## License

Distributed under the Apache 2.0 License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Hristo Panayotov - [ezzopanayotov@gmail.com](mailto:ezzopanayotov@gmail.com)

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
List of useful resources that have helped me complete this project.
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Netlify](https://www.netlify.com/)
* [React Avatar](https://mui.com/material-ui/react-avatar/)
* [GitHub Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/badge/License-Apache_2.0-blue.svg
[license-url]: https://github.com/EzzoPanayotov/Solent-forum/blob/main/LICENSE
[product-screenshot]: images/screenshot.png