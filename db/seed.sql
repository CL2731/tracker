USE employees;

INSERT INTO department
(name) VALUE 
-- ('help desk'), add more
INSERT INTO employee
(first_name, last_name, role_id, manager_id) VALUE 
('person first name', 'their last name', 1, NULL)
-- //add more

INSERT INTO role
(title, department_id) VALUE 
('persons title', 1)
-- //add more