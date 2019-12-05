BEGIN;

DROP TABLE IF EXISTS characters, results, wallet, CASCADE;


CREATE TABLE characters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    house VARCHAR(100) NOT NULL,
    weapon VARCHAR(100) NOT NULL,
    honour INTEGER NOT NULL
);

CREATE TABLE results (
id SERIAL PRIMARY KEY,
dead_result VARCHAR(250) NOT NULL,
survive_result VARCHAR(250) NOT NULL,
wallet_id INTEGER


)







INSERT INTO characters(name,house,weapon,honour) VALUES
('Jon Snow', 'House Stark','broad sword', 100)
('Daenerys Targaryen','House Targaryen','dragons' ,140),
('Ice King', 'No Allegiance','army of the dead', 230),
('Ramsay Bolton','House Bolton', 'mind', 80),
('Petyr Baelish', 'House Baelish', 'mind',40),
('Arya Stark', 'House Stark', ' short sword' , 120),
('Cersei Lannister', 'House Lannister', 'mind' , 30),
('Robb Stark', 'House Stark', 'direwolf', 90),
('Jamie Lannister','House Lannister', ' broad sword' , 101),
('Tyrion Lannister', 'House Lannister', 'mind', 65),
('Stannis Baratheon', 'House Baratheon', 'brute force', 23),
('Balon Greyjoy','House Greyjoy', 'entertainment' 7),
('Oberyn Martell', 'House Martell', 'dual swords' 115),
('Margaery Tyrell','House Martell', 'persuasion' 3),
('Brienn of Tarth','House Tarth', 'broad sword', 113),
('Yara Greyjoy', 'House Greyjoy' , 'ships', 86),
('Ellaria Sand','House Martell', 'whip', 94),
('Red Woman','No Allegiance', 'magic', 133),
('Missandei of Naath','No Allegiance','nothing',1 ),
('Olena Martell' , 'House Martell','poison', 2);



COMMIT; 