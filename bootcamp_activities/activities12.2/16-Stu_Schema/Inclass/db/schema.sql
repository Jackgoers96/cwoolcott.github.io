-- Write your schema here --

-- studentName = "'Robert'); DROP TABLE students; ---"
-- INSERT INTO students (name) values (studentName);

DROP DATABASE IF EXISTS grocery_db;
CREATE DATABASE grocery_db;

USE grocery_db;

CREATE table products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(30) NOT NULL, 
    category_name VARCHAR(100) NOT NULL, 
    price INT NOT NULL, 
    in_stock BOOLEAN DEFAULT FALSE
);

CREATE table categories (
     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     category_name VARCHAR(30) NOT NULL 
)
