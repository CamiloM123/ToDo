
-- Crear la tabla tasks
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
	status INTEGER,
);


INSERT INTO tasks (title, description, status)
VALUES 
    ('Task 1', 'Data science task', 1),
    ('Task 2', 'Feed the cat', 2),
    ('Task 3', 'Clean up my room', 3);


-- Seleccionar todas las tareas
SELECT * FROM tasks;