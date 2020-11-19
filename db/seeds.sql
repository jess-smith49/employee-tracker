INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Meredith', 'Gray', 1, 1),
('Derek', 'Shepherd', 2, 1), 
('Amelia', 'Sheperd', 2, 1)
('Cristina', 'Yang', 3, 1);

INSERT INTO role (title, salary, department_id)
VALUES
('General Surgeon', 300000, 1),
('Neurosurgeon', 500000, 2),
('Neurosurgeon', 200000, 2),
('Cardiologist', 300000, 3);

INSERT INTO department (name)
VALUES
('General Surgery'),
('Nuerosurgery'),
('Cardiology');