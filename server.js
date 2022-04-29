const { prompt } = require('inquirer');
const { inherits } = require('util');
const db = require('./db');
require('console.table');

init();
const init = () => {
    loadMainPrompts();
}
const loadMainPrompts = async () => {
    const { choices } = await prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'Where would you like to start?',
            choices: [
                {
                    name: 'View all departments',
                    value: 'View_All_Departments'
                },
                {
                    name: 'View all roles',
                    value: 'View_All_Roles'
                },
                {
                    name: 'View all employees',
                    value: 'View_All_Empolyees'
                },
                {
                    name: 'Add department',
                    value: 'Add_Department'
                },
                {
                    name: 'Add a role',
                    value: 'Add_Role'
                },
                {
                    name: 'Add employee',
                    value: 'Add_Empolyee'
                },
                {
                    name: 'Remove department',
                    value: 'Remove_Department'
                },
                {
                    name: 'Remove a role',
                    value: 'Remove_Role'
                },
                {
                    name: 'Remove employee',
                    value: 'Remove_Empolyee'
                },
                {
                    name: 'Update role',
                    value: 'Update_Role'
                },
                {
                    name: 'Update manager',
                    value: 'Update_Manager'
                },
                {
                    name: 'Quit',
                    value: 'Quit'
                }
            ]
        }
    ]);
    switch (choices) {
        case 'View_All_Departments':
            return viewDepartment();
        case 'View_All_Roles':
            return viewRoles();
        case 'View_All_Employees':
            return viewEmployees();
        case 'Add_Department':
            return addDepartment();
        case 'Add_Role':
            return addRole();
        case 'Add_Employee':
            return addEmployee();
        case 'Remove_Department':
            return removeDepartment();
        case 'Remove_Role':
            return removeRole();
        case 'Remove_Employee':
            return removeEmployee();
        case 'Update_Role':
            return updateRole();
        case 'Update_Manager':
            return updateManager();
        default: 
        return quit(); 
       }
}

async function viewDepartment() {
    const departments = await db.findAllDepartments();
    console.table(departments);
    loadMainPrompts();
}
async function viewRoles() {
    const roles = await db.findAllRole();
    console.table(roles);
    loadMainPrompts();
}
async function viewEmployees() {
    const employees = await db.findAllEmployees();
    console.table(employees);
    loadMainPrompts();
}
async function addDepartment() {
    const department = await prompt([
        {
            name: 'name',
            message: 'What department do you want to add?',
        }
    ]);
    
    await db.createDepartment(department);
    loadMainPrompts();
}
async function addRole() {
    const departments = await db.findAllDepartments();
    const departmentChoices = departments.map(({id, name}) => ({
        name: name,
        value: id
    }));
    const role = await prompt([
        {
            name: 'Title',
            message: 'What is the name of the new role?',
        },
        {
            type: 'list',
            name: 'department_id',
            message: 'What department does the role belong to?',
            choices: departmentChoices
        }
    ]);
    await db.createRole(role);
    loadMainPrompts();
}
 async function addEmployee() {
     const roles = await db.findAllRoles();
     const employees = await db.findAllEmployees();
     const employee = await prompt([
         {
             name: 'first_name',
             message: 'What is their first name?'
         },
         {
             name: 'last_name',
             message: 'What is their last name?'
         }
     ]);
     const roleChoices = roles.map(({id, title}) => ({
         name: title,
         value: id
     }));
     const {roleId} = await prompt({
         type: 'list',
         name: 'roleId',
         message: 'What is their role?',
         choices: roleChoices
     });
     employee.role_id = roleId;
     const managerChoices = employees.map(({id, first_name, last_name}) => ({
         name: `${first_name} ${last_name}`, 
         value: id
     }));
     managerChoices.unshift({name: 'none', value: null});
     const {managerId} = await prompt({
         type: 'list',
         name: 'managerId',
         message: 'Who is the manager?',
         choices: managerChoices
     });
     employee.manager_id = managerId;
     await db.createEmployee(employee);
     loadMainPrompts();
 }