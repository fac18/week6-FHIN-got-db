BEGIN;

DROP TABLE IF EXISTS characters, wallet, results CASCADE;


CREATE TABLE characters (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    house VARCHAR(50) NOT NULL,
    weapon VARCHAR(100) NOT NULL,
    honour_points INTEGER DEFAULT 100
);

CREATE TABLE wallet (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    character_id INTEGER,
    honour_count INTEGER DEFAULT 0
);

CREATE TABLE results (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    dead_result VARCHAR(250),
    survive_result VARCHAR(250),
    wallet_id INTEGER
);

ALTER TABLE "characters" ADD FOREIGN KEY ("id") REFERENCES "wallet" ("character_id");
ALTER TABLE "results" ADD FOREIGN KEY ("wallet_id") REFERENCES "wallet" ("id");

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