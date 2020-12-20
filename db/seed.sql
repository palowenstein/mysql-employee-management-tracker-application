-- Specifies Database
USE EmployeeRoster_db;

-- Department
INSERT INTO department (department_name) 
VALUES
("Atari Coin-Up Division"),
("Atari Consumer Division"),
("Atari Research"),
("AtariTel");


-- Role
INSERT INTO role (title, salary, department_id)
VALUES
("System Architect", 220000, 1)
("Microchip Designer Consumer", 200000, 2),
("Microchip Designer Research", 240000, 3),
("Industrial Design", 120000, 4),
("Game Designer Arcade", 140000, 5),
("2600 Software Manager", 180000, 6),
("Game Designer Consumer", 130000, 7),
("Graphic Artist", 100000, 8),
("Artwork Design", 100000, 9);


-- Table
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES
("Jay", "Miner", 1, null),
("Joe", "Decuir", 2, 1),
("Steven", "Mayer", 2, 1),
("George", "McLeod", 2, 1),
("Douglas", "Neubauer", 2, 1),
("George", "Wang", 1, null),
("Steve", "Saunders", 3, 6)
("Rob", "Alkire", 3, 6),
("Regan", "Cheng", 4, null),
("Owen", "Rubin,", 5, null),
("Dave", "Theurer", 5, null),
("George", "Kiss", 6, null),
("Douglas", "Neubauer", 7, null),
("Howard Scott", "Warshaw", 8, 6),
("Tod Frye", 8, 6),
("Dave Comstock", 8, 6),
("Dave", "Staugas", 8, 6),
("Jérôme", "Domurat", 9, 7),
("Alan", "Murphy", 9, 7);



-- Instructions

-- * **department**:
--   * **id** - INT PRIMARY KEY
--   * **department_name** - VARCHAR(30) to hold department name

-- * **role**:
--   * **id** - INT PRIMARY KEY
--   * **title** -  VARCHAR(30) to hold role title
--   * **salary** -  DECIMAL to hold role salary
--   * **department_id** -  INT to hold reference to department role belongs to

-- * **employee**:
--   * **id** - INT PRIMARY KEY
--   * **first_name** - VARCHAR(30) to hold employee first name
--   * **last_name** - VARCHAR(30) to hold employee last name
--   * **role_id** - INT to hold reference to role employee has
--   * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager