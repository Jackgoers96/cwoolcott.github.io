DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;

USE customer_db;

CREATE TABLE customers (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name NOT NULL VARCHAR(30),
  last_name  NOT NULL VARCHAR(30),
  value_card_member TINYINT(1) NOT NULL,
  tables_id INT NULL
);

CREATE TABLE tables (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  table_type VARCHAR(50) NOT NULL,
)

SELECT * FROM customers INNER JOIN tables ON customers.tables_id = tables.id