
/*
Creación de la base de datos, creación de usuario admin con privilegios en la BD bugs_bd,
Creación de las tablas necesarias para el proyecto.
*/
CREATE DATABASE IF NOT EXISTS bugs_db;
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'a9yh7bxs3I1I';
GRANT ALL PRIVILEGES ON bugs_db.* TO 'admin'@'%';
FLUSH PRIVILEGES;
USE bugs_db;

CREATE TABLE IF NOT EXISTS bugs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    bug VARCHAR(200) NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado BOOLEAN DEFAULT false
);