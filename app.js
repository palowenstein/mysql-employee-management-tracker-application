// The command-line application below allows users to:
// — Functionality #1: Add departments, roles, employees
// — Functionality #2: View departments, roles, employees
// — Functionality #3: Update employee roles
// — Functionality #4: Delete (Remove) Employee

// Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table"); // Comment this line out if you need index # prior to ID in table.

// MySQL Database Connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "EmployeeRoster_db"
  });

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connection #" + connection.threadId + "\n");
    employeeRoster();
});
  
// ATARI Employees Management App
function employeeRoster() {
    inquirer
    .prompt({
        name: "action",
        type: "list",
        message: "Please indicate task",
        choices: [
            "Add Department", 
            "Add Role", 
            "Add Employee",
            "View Departments", 
            "View Roles", 
            "View Employees",
            "Update Employee Role",
            "Delete Employee",
            "Leave"
        ]
    })
    .then(function(input) {
        switch (input.action) {
            case "Add Department": addDepartment(); break;
            case "Add Role": addRole(); break;
            case "Add Employee": addEmployee(); break;
            case "View Departments": viewDepartments(); break;
            case "View Roles": viewRoles(); break;
            case "View Employees": viewEmployees(); break;
            case "Update Employee Role": updateEmployeeRole(); break;
            case "Delete Employee": deleteEmployee(); break;            
            case "Leave": connection.end(); break;
        }
    });
}

// Functionality #1 (C_RUD): Add Departments, Roles, Employees //
// #1A—Add Departments -> Name
// ------------------------------------------
const addDepartment = () => {
    inquirer
    .prompt({
        name: "newDepartment", type: "input", message: "Enter Name for New Department.",
        validate: (input) => {
            if ( !input ) { return 'Cannot accept an empty input field.'; }
            return true;
        },
    })
    .then(response => {
        connection.query("INSERT INTO department SET ?",
        { name: response.newDepartment },
        (err, res) => {
            if (err) throw err;
            console.log(`${response.newDepartment} department added successfully.`);
            employeeRoster();
        });
    });
};
// #1B—Add Roles -> Title / Salary / ID
// ------------------------------------------
const addRole = () => {
    inquirer
    .prompt([
        {
            name: "roleTitle", type: "input", message: "Enter role title to be added.",
            validate: (input) => {
                if ( !input ) { return 'Cannot accept an empty input field.'; }
                return true;
            },
        },
        {
            name: "roleSalary", type: "input", message: "Enter salary for new role title.",
            validate: (input) => {
                if ( !input ) { return 'Cannot accept an empty input field.'; }
                return true;
            },
        },
        {
            name: "departmentId", type: "input", message: "Enter department ID number for new role title.",
            validate: (input) => {
                if ( !input ) { return 'Cannot accept an empty input field.'; }
                return true;
            },
        }
    ])
    .then(response => {
        connection.query("INSERT INTO role SET ?",
        {
            title: response.roleTitle,
            salary: parseInt(response.roleSalary),
            department_id: parseInt(response.departmentId)
        },
        (err, res) => {
            if (err) throw err;
            console.log(`${response.roleTitle} has been added as a new role.`);
            employeeRoster();
        });
    });
};
// #1C—Add Employees
// ------------------------------------------
const addEmployee = () => {
    inquirer
    .prompt([
        {
            name: "firstName", type: "input", message: "Enter newly added employee's first name.",
            validate: (input) => {
                if ( !input ) { return 'Cannot accept an empty input field.'; }
                return true;
            },
        },
        {
            name: "lastName", type: "input", message: "Enter newly added employee's last name.",
            validate: (input) => {
                if ( !input ) { return 'Cannot accept an empty input field.'; }
                return true;
            },
        },
        {
            name: "roleId", type: "input", message: "Enter role ID for the added employee.",
            validate: (input) => {
                if ( !input ) { return 'Cannot accept an empty input field.'; }
                return true;
            },
        }
    ])
    .then(response => {
        connection.query("INSERT INTO employee SET ?",
        { first_name: response.firstName, last_name: response.lastName, role_id: parseInt(response.roleId) },
        (err, res) => {
            if (err) {
                console.log('Invalid ID.');
                addEmployee();
                return;
            }
            console.log(`${response.firstName} ${response.lastName} has been added as a new employee.`);
            employeeRoster();
        });
    });
};


// Functionality #2 (C_R_UD): View Departments, Roles, Employees //
// #2A-View Departments
const viewDepartments = () => {
    connection.query(`SELECT * FROM department`, (err, res) => {
      if (err) throw err; console.table(res); employeeRoster();
    });
};
// #2B-View Roles
const viewRoles = () => {
    connection.query(`SELECT * FROM role`, (err, res) => {
      if (err) throw err; console.table(res); employeeRoster();
    });
};
// #2C-View Employees
const viewEmployees = () => {
    connection.query( `
    
    SELECT
    distinct (e.id),
    CONCAT (e.first_name,' ',e.last_name) AS employee_name,
    r.title as role_title,
    d.name,
    r.salary,
    e.manager_id

    FROM employee e
    INNER JOIN role r 
    ON e.role_id = r.id
    INNER JOIN department d
    ON r.department_id = d.id
    ORDER BY e.id ASC LIMIT 100`
    , (err, res) => {
        if (err) throw err; // mysql server / sql database association.
        console.table(res);
        employeeRoster(); // Executes the employeeRoster function to present the user menu choices.
    })
};


// — Functionality #3 (CR_U_D): Update Role for Given Employee
const updateEmployeeRole = () => {
    connection.query(`
    SELECT id, first_name, last_name
    FROM employee`,
    (err, res) => {
        if (err) throw err;
        inquirer
        .prompt([
            {
                name: "employeeId",
                type: "input",
                message: "Enter the Employee ID number to be updated to new role.",
                validate: (input) => {
                    if ( !input ) { return 'Cannot accept an empty input field.'; }
                    return true;
                },
            },
            {
                name: "updatedRoleId",
                type: "input",
                message: "Enter new department ID number for the selected employee.",
                validate: (input) => {
                    if ( !input ) { return 'Cannot accept an empty input field.'; }
                    return true;
                },
            },
        ])
        .then(response => {
            let updatedEmployeeRole = parseInt(response.employeeId);
            let updatedRoleId = parseInt(response.updatedRoleId);
            connection.query(`UPDATE employee SET role_id = ${updatedRoleId} WHERE id = ${updatedEmployeeRole}`,
            (err, res) => {
                if (err) {
                    console.log('Must enter valid ID. Please try again.');
                    updateEmployeeRole();
                    return;
                }
                console.log(`Role associated with employee properly updated.`);
                employeeRoster();
            });
        });
    });
};

// — Functionality #4 (CRU_D): Delete Employee
const deleteEmployee = () => {
    let employees = []; // This creates an 'employees' array to store all employees.
    connection.query(`SELECT id, first_name, last_name FROM employee`, // This connects to the database to import individual employee information.
    (err, res) => {
        res.forEach(element => {
        employees.push(`${element.id} ${element.first_name} ${element.last_name}`); // This pushes into the 'employees' array employee information.
        });
    inquirer
        .prompt({
            name: "deletedEmployee", type: "list", message: "Select employee to be removed.", choices: employees
        })
    .then(response => {
        let deletedEmployeeId = parseInt(response.deletedEmployee)
        connection.query(`DELETE FROM employee WHERE id = ${deletedEmployeeId}`,
        (err, res) => {
            console.table(response);
            employeeRoster();
        });
    });
    })
};
