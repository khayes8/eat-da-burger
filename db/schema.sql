CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR (50) NOT NULL,
devoured BOOLEAN,
date TIMESTAMP,
PRIMARY KEY(id)
);
SELECT * FROM burgers;