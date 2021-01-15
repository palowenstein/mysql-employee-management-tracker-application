## #hw12-mysql-employee-management-tracker-application 
![Project license](https://img.shields.io/badge/license-MIT,https://choosealicense.com/licenses/mit/-brightgreen)

<h3>Employee management application executed via a Node Command Line Interface (CLI). Employee information is stored in a MySQL database.</h3>
<p>Github Repository Page: https://github.com/palowenstein/mysql-employee-management-tracker-application</p>
<p>Github Deployment Page: N/A - App is to be executed via CLI in Terminal (Mac) or Powershell, Bash (PC).</p>

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
<br />
MySQL Workench: 1) Setting up the database, 2) Populating the database with seed.sql. (GIF)

![MySQL Employee Management Tracker Application — CLI App Execution (GIF)](./demo_assets/ucla-hw12-mysql-employee-management-tracker-application-4-node-cli-app-execution-1080p.gif "MySQL Employee Management Tracker Application — CLI App Execution (GIF)")
<br />
Executing the Application via CLI (Command Line Interface) in Terminal.

## Overview
<ul>
<li>The MySQL Employee Management Tracker Application allows for the creation and maintenance of an employee database, ideal for company management.</li>
<li>The application is powered by Node.js to allow for JS execution outside of the browser (Mac Terminal window), Express (Get/Post Requests between REST 'REpresentational State Transfer' APIs), Inquirer (for information collection), Console.table (for a clean table display) and a MySQL database which stores the information created, read, updated or deleted (CRUD).</li>
<li>The MySQL database, stored in the db folder as <strong>schema.sql</strong>, can be initiatied via Terminal or, more simply, via MySQL Workbench (GIF/MP4).</li>
<li>In addition of the database schema, the db folder also contains a <strong>seed.sql</strong> file which will populate the database at startup so that it doesn't show empty.</li>
<li>Like the database, the seed.sql file can be executed via Terminal or via MySQL Workbench, it contains the names of 19 Atari Inc. key employees (1972-1984) such as Jay Miner or Joe Decuir.</li>
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
  <li>Oracle's MySQL must be installed and running in the background as seen in the System Preferences photo below. The application will not run correctly otherwise. Please make note of the <strong>password</strong> associated with your MySQL install as it will be required by the application. Newcomers to MySQL will gain information from reading the following article: https://www.thoughtco.com/installing-mysql-on-mac-2693866</li>
  <li>The end user must execute the package.json file via the npm install command (Terminal). This will install the required dependencies (Express, Inquirer, MySQL, Console.Table) needed for the program to run. This package is located in the application root folder and must be executed <i>in situ</i> prior to running the application (see Instructions).</li>
  </ol>
</li>
</ul>

![MySQL Employee Management Tracker Application — MySQL Background Execution / Mac OSX System Preferences (PNG)](./demo_assets/ucla-hw12-mysql-employee-management-tracker-application-0-mac-system-preferences-mysql-running-in-background.png "MySQL Employee Management Tracker Application — MySQL Background Execution / Mac OSX System Preferences (PNG)")
<br />
MySQL runs in the background as seen in the MySQL maintenance panel located in System Preferences (Apple Macintosh).


## Instructions
<ul>
<li>Makes sure MySQL is properly installed, password initiated and running in the background as seen in the Details section illustration above.</li>
<li>In MySQL Workbench, load the schema.sql file, located in the application db folder, then initiate it by clicking on the lightning bolt (GIF/MP4).</li>
<li>Still in MySQL Workbench, locate the seed.sql file in the application db folder then, as in the prior step, initiate it by clicking on the lightning bolt (GIF/MP4).</li>
<li>In the Application folder, open <strong>app.js</strong> in a text / code editor, add your MySQL Password on line 17 between the password quotation marks.</li>
<li>In Terminal, locate the application folder and enter into it via the 'cd' command: cd mysql-employee-management-tracker-application</li>
<li>Run the 'npm install' command to install the necessary node modules from the package.json.</li>
<li>Run the 'node app.js' command to launch the application in Terminal (GIF/MP4).</li>
<li>Once the application is running, you can exert all four CRUD privileges (Create Read Update Delete):
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

![MySQL Employee Management Tracker Application — Setting up the database in MySQL Workbench (PNG)](./demo_assets/ucla-hw12-mysql-employee-management-tracker-application-2-database-setup.png "MySQL Employee Management Tracker Application — Setting up the database in MySQL Workbench (PNG)")
<br />
Setting up the database in MySQL Workbench (PNG)

![MySQL Employee Management Tracker Application — Populating the database with seed.mysql (ATARI Employees) in MySQL Workbench (PNG)](./demo_assets/ucla-hw12-mysql-employee-management-tracker-application-3-seed-setup.png "MySQL Employee Management Tracker Application — Populating the database with seed.mysql (ATARI Employees) in MySQL Workbench (PNG)")
<br />
Populating the database with seed.mysql (ATARI Employees) in MySQL Workbench (PNG)

![MySQL Employee Management Tracker Application — Executing the Appication via CLI Interface in Terminal [1] (PNG)](./demo_assets/ucla-hw12-mysql-employee-management-tracker-application-4-node-cli-app-execution.png "MySQL Employee Management Tracker Application — Executing the Appication via CLI Interface in Terminal [1] (PNG)")
<br />
Executing the Appication via CLI Interface in Terminal [1] (PNG)

![MySQL Employee Management Tracker Application — Executing the Appication via CLI Interface in Terminal [2] (PNG)](./demo_assets/ucla-hw12-mysql-employee-management-tracker-application-5-node-cli-app-execution.png "MySQL Employee Management Tracker Application — Executing the Appication via CLI Interface in Terminal [2] (PNG)")
<br />
Executing the Appication via CLI Interface in Terminal [2] (PNG)

## Video

![MySQL Employee Management Tracker Application — Dabatase, Seed.sql Setup Demo (MP4)](./demo_assets/ucla-hw12-mysql-employee-management-tracker-application-1-database-seed-setup.mp4 "MySQL Employee Management Tracker Application — Dabatase, Seed.sql Setup Demo (MP4)")
<br />

![MySQL Employee Management Tracker Application — Executing the Appication via CLI Interface in Terminal (MP4)](./demo_assets/ucla-hw12-mysql-employee-management-tracker-application-4-node-cli-app-execution-1080p.mp4 "MySQL Employee Management Tracker Application — Executing the Appication via CLI Interface in Terminal (MP4)")
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