DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

USE registrar_db;

CREATE TABLE instructors (
  id INT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE courses (
  id INT,
  course_title VARCHAR(30) NOT NULL,
  instructors_id INT,
  order_details TEXT,
  FOREIGN KEY (instructors_id) REFERENCES instructors(id)
  FOREIGN KEY (projector_id) REFERENCES projectors(id)
);


