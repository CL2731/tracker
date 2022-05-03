USE employee;

INSERT INTO department (name) 
VALUE ('Engineering'),
      ('Finance'),
      ('Legal'),
      ('Sales');

INSERT INTO roles (title, department_id) 
VALUE ('Lead Engineer', 1),
      ('Software Engineer',1),
      ('Account Manager', 2),
      ('Accountant',2),
      ('Legal Team Lead', 3),
      ('Lawyer', 3),
      ('Sales Lead', 4),
      ('Salesperson', 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUE ('Clement', 'Hartman', 1, NULL),
      ('Lilah', 'Britton', 2, 1),
      ('Henry', 'Robins', 3, 1),
      ('Adrean', 'Smith', 4, NULL),
      ('Ben', 'Sanderson', 5, 2),
      ('Cameron', 'Evans', 6, 2),
      ('Logan', 'Miller', 7, NULL),
      ('Penny', 'Stephens', 8, 3),
      ('Emily', 'Hopkins', 9, NULL),
      ('Tristan', 'Santos', 10, 4);

INSERT INTO manager (first_name, last_name)
SELECT first_name,
       last_name
FROM employee