CREATE DATABASE pokemon_db;
USE pokemon_db;

CREATE TABLE pokemon (
   id INT(11) NOT NULL AUTO_INCREMENT,
   fecha VARCHAR(25) NOT NULL,
   nombre VARCHAR(255) NOT NULL,
   altura VARCHAR(25) NOT NULL,
   peso VARCHAR(25) NOT NULL,
   PRIMARY KEY (id)
);

insert into pokemon(fecha,nombre,altura,peso) VALUES ("2023-04-04","Charizard","1.5","10");

select * from pokemon;