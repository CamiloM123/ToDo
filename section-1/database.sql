-- Crear la tabla tasks
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT FALSE
);


-- Insertar tareas de ejemplo
INSERT INTO tasks (title, description, completed)
VALUES 
    ('Task 1', 'Data science task', false),
    ('Task 2', 'Feed the cat', false),
    ('Task 3', 'Clean up my room', true);


-- Seleccionar todas las tareas
SELECT * FROM tasks;