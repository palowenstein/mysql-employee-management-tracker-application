## #hw12-mysql-employee-management-tracker-application 
![Project license](https://img.shields.io/badge/license-MIT,https://choosealicense.com/licenses/mit/-brightgreen)

<h3>Employee management application executed via a Node Command Line Interface (CLI) in Terminal. Employee information is stored in a MySQL database.</h3>
<p>Github Repository Page: https://github.com/palowenstein/mysql-employee-management-tracker-application</p>
<p>Github Deployment Page: N/A - App is to be executed in Terminal via CLI.</p>

# Table of Contents
  * [GIF](#Gif)
  * [Overview](#Overview)
  * [Details](#Details)
  * [Instructions](#Instructions)
  * [Screenshots](#Screenshots)
  * [Video](#Video)
  * [References](#References)
  * [License](#License)
  * [Contact](#Contact)

## GIF
![MySQL Employee Management Tracker Application — Dabatase, Seed.sql Setup Demo (GIF)](./demo_assets/ucla-hw12-mysql-employee-management-tracker-application-1-database-seed-setup.gif "MySQL Employee Management Tracker Application — Dabatase, Seed.sql Setup Demo (GIF)")
![MySQL Employee Management Tracker Application — CLI App Execution (GIF)](./demo_assets/ucla-hw12-mysql-employee-management-tracker-application-2-cli-app-execution.gif "MySQL Employee Management Tracker Application — CLI App Execution (GIF)")

## Overview
<ul>
<li>The MySQL Employee Management Tracker Application allows for the creation and maintenance of an employee database, ideal for company management.</li>
<li>The application is powered by Node.js to allow for JS execution outside of the browser (Terminal window), Express (Get/Post Requests between REST 'REpresentational State Transfer' APIs), Inquirer (for information collection), Console.table (for a clean table display) and a MySQL database which stores the information created, read, updated or deleted (CRUD).</li>
<li>The MySQL database stored in the db folder can be initiatied via Terminal or, more simply, via MySQL Workbench.</li>
<li>In addition of the database schema, the application includes a pre-filled seed.sql, also stored in the db folder, which populates the database at startup so that it doesn't show empty.</li>
<li>The seed.sql file can be initiatied via Terminal or via MySQL Workbench, it contains the names of 19 Atari Inc. key employees (1972-1984) such as Nolan Bushnell or Jay Miner.</li>
<li>The end user, via the Terminal Command-Line Interface, is allowed all four CRUD stages:
  <ul>
    <li>(Create) Add departments, roles, employees.</li>
    <li>(Read) View departments, roles, employees.</li>
    <li>(Update) Update employee roles.</li>
    <li>(Delete) Delete employees.</li>
  </ul>
</li>
</ul>
</ul>

## Details
<ul>
<li>A .gitignore file is present at the root level to prevent the upload of node_modules, bonus functions in development, .DS_Store.</li>
<li>For this application to execute properly:
  <ol>
  <li>The included package.json includes an install link to all the required dependencies (Express, Inquirer, MySQL, Console.Table) needed for the program to run. This packaged must be executed in Terminal from the application root folder (npm install) prior to executing the application (see Instructions).</li>
  <li>Oracle's MySQL must be installed and running in the background as seen in the System Preferences photo below. The application will not run if MySQL isn't running in the background. Newcomers to MySQL will gain information from reading the following article: https://www.thoughtco.com/installing-mysql-on-mac-2693866</li>
</ul>

![MySQL Employee Management Tracker Application — MySQL Background Execution / Mac OSX System Preferences (PNG)](./demo_assets/ucla-hw12-mysql-employee-management-tracker-application-0-mac-system-preferences-mysql-running-in-background.png "MySQL Employee Management Tracker Application — MySQL Background Execution / Mac OSX System Preferences (PNG)")

## Instructions
<ul>
<li>Makes sure MySQL is properly installed, password initiatied and running in the background as seen in the Details section above.</li>
<li>In MySQL Workbench, load the schema.sql file located in the application db folder then initiate it by clicking on the lightning bolt (GIF/MP4).</li>
<li>Still in MySQL Workbench, populate the database with the seed.sql file (ATARI employees) also located in the application db folder (GIF/MP4).</li>
<li>In Terminal, locate the application folder and enter into it via the 'cd' command: cd mysql-employee-management-tracker-application</li>
<li>Run the 'npm install' command to install the express module from the package.json.</li>
<li>Run the 'node app.js' command to launch the application in Terminal (GIF/MP4).</li>
<li>Once the application us running, you can exert all four CRUD privileges (Create Read Update Delete):
  <ol>
    <li>Creation: Create departments, roles, employees.</li>
    <li>Reading: Read departments, roles, employees.</li>
    <li>Updating: Update employee roles.</li>
    <li>Deletion: Delete employees.</li>
  </ol>
<li>The application can be closed from the main menu by selecting the 'Leave' option.</li>
</ul>

<p><i>Refer to app.js (javascript file) for code dissection.</i></p>

## Screenshots

## Video

![MySQL Employee Management Tracker Application — Dabatase, Seed.sql Setup Demo (MP4)](./demo_assets/ucla-hw12-mysql-employee-management-tracker-application-1-database-seed-setup.mp4 "MySQL Employee Management Tracker Application — Dabatase, Seed.sql Setup Demo (MP4)")
<br />

![MySQL Employee Management Tracker Application — CLI App Execution (MP4)](./demo_assets/ucla-hw12-mysql-employee-management-tracker-application-2-cli-app-execution.mp4 "MySQL Employee Management Tracker Application — CLI App Execution (MP4)")
<br />

## References
<ul>
<li>MySQL Relational Database Structure.</li>
<li>Node.js Javascript Library for CLI Execution.</li>
<li>Express for GET/POST/DELETE Requests between REST APIs.</li>
<li>Inquirer for prompt interaction, data collection.</li>
<li>Console.Table for proper CLI table formatting / presentation.
<li>Package.JSON / NPM for installing dependencies</li>
</ul>

 ## License
<p>
<a href="./MITlicense.txt">MIT License</a> | Copyright © [2021] Pierre André Lowenstein
</p>

 ## Contributions
<ul>
<li>Pull/Fork from master.</li>
<li>Create your own branch.</li>
<li>Add your own code (must be tested).</li>
<li>Push your branch.</li>
<li>Request a pull.</li>
</ul>

<p>Please use the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)</p>
<p>For major changes, please open an issue beforehand to discuss the changes.</p>

 ## Contact
<p>
<a href="http://pierreandrelowenstein.com" title="[www] Pierre Andr&eacute; Lowenstein" target="_blank">[www] pierreandrelowenstein.com</a>
&nbsp;|&nbsp;
<a href="mailto:coder@pierreandrelowenstein.com" title="Courriel / E-Mail">[e-mail] Send me a 'courriel'</a>
</p>