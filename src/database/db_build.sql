BEGIN;

DROP TABLE IF EXISTS characters, houses, weapons, powers, honour CASCADE;


CREATE TABLE characters (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    honour INTEGER NOT NULL
);

CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    character_id INTEGER REFERENCES characters(id) 
);

CREATE TABLE weapons (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    character_id INTEGER REFERENCES characters(id) 
);

INSERT INTO characters(first_name,last_name,honour) VALUES
('Jon', 'Snow',100),
('Daenerys', 'Targaryen', 140),
('Ice', 'King', 230),
('Ramsay', 'Bolton', 80),
('Petyr', 'Baelish', 40),
('Arya', 'Stark', 120),
('Cersei', 'Lannister', 40),
('Robb', 'Stark', 90),
('Jamie', 'Lannister', 110),
('Tyrion', 'Lannister', 2),
('Stannis', 'Baratheon', 90),
('Balon', 'Greyjoy', 70),
('Oberyn', 'Martell', 115),
('Margaery', 'Tyrell', 3),
('Brienn', 'of Tarth', 113),
('Yara', 'Greyjoy', 86),
('Ellaria', 'Sand', 94),
('Red', 'Woman', 133),
('Missandei', 'of Naath', 23),
('Olena', 'Martell', 1);

INSERT INTO houses(name) VALUES
('House Stark'),
('House Targaryen'),
('House Bolton'),
('House Baelish'),
('House Lannister'),
('House Greyjoy'),
('House Martell'),
('House Tyrell'),
('House Tarth'),
('House Baratheon'),
('No Allegiances');

INSERT INTO weapons(name) VALUES
('broad sword'),
('dagger'),
('wildfire'),
('poison'),
('whip'),
('axe'),
('mind'),
('short sword'),
('bow and arrow'),
('dragon'),
('direwolf');

COMMIT; 