DROP DATABASE IF EXISTS tvDB;
CREATE database tvDB;

USE tvDB;

CREATE TABLE tvshow (
  showid INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NULL,
  genre VARCHAR(100) NULL,
  network VARCHAR(100) NULL,
  PRIMARY KEY (showid)
);

CREATE TABLE tvcharacter (
  characterid INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NULL,
  quote VARCHAR(1000) NULL,
  showid INT NULL,
  PRIMARY KEY (characterid)
);