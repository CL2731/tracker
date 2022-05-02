const connect = require('./connect');
class DB {
    constructor(connect){
        this.connect = connect
    }
    findAllEmployees(){
        return this.connect.query( 
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name"
        );
    }
    findAllManagers(employeeId){
        return this.connect.query( 
            "SELECT id, first_name, last_name, FROM employee WHERE != ?", employeeId
        );
    }
    createEmployees(employee){
        return this.connect.query( 
            "INSERT INTO employee SET ?", employee
        );
    }
    removeEmployees(employeeId){
        return this.connect.query( 
            "DELETE FROM employee WHERE id = ?", employeeId
        );
    }
    updateRoles(employeeId, roleId){
        return this.connect.query( 
            "UPDATE empolyee SET role_id = ? WHERE id = ?", [roleId, employeeId]
        );
    }
    updateManager(employeeId, roleId){
        return this.connect.query( 
            "UPDATE empolyee SET manager_id = ? WHERE id = ?", [roleId, employeeId]
        );
    }
    findAllRoles(){
        return this.connect.query( 
            "SELECT role.id, role.title, department.name"
        );
    }
    createRole(role){
        return this.connect.query( 
            "INSERT INTO role SET ?", role
        );
    }
    removeRole(roleId){
        return this.connect.query( 
            "DELETE FROM role WHERE id = ?", roleId
        );
    }
    findAllDepartments(){
        return this.connect.query( 
            "SELECT department.id, department.name"
        );
    }
    createDepartments(department){
        return this.connect.query( 
            "INSERT INTO department SET ?", department
        );
    }
    removeDepartments(departmentId){
        return this.connect.query( 
            "DELETE FROM department WHERE department = ?", departmentId
        );
    }
}