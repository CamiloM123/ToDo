-- Crear la tabla status
CREATE TABLE status (
	status_id SERIAL PRIMARY KEY,
	status_name VARCHAR(20) NOT NULL
);

-- Crear la tabla tasks
CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
	status_id INTEGER,
	CONSTRAINT fk_status_id FOREIGN KEY (status_id) REFERENCES status(status_id)
);


-- Insertar tareas de ejemplo
INSERT INTO status (status_name)
VALUES 
    ('To Do'),
    ('In Progress'),
	('Done');

INSERT INTO tasks (title, description, status_id)
VALUES 
    ('Task 1', 'Data science task', 1),
    ('Task 2', 'Feed the cat', 2),
    ('Task 3', 'Clean up my room', 3);


-- Seleccionar todas las tareas
SELECT * FROM tasks;