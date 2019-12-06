BEGIN;

DROP IF EXISTS characters, status CASCADE;

CREATE TABLE characters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    house VARCHAR(50) NOT NULL,
    weapon VARCHAR(100) NOT NULL,
    honour INTEGER DEFAULT 100
);

CREATE TABLE wallet (
    id SERIAL PRIMARY KEY,
    character_id INTEGER REFERENCES characters(id),
    honour_count INTEGER DEFAULT 0
);

CREATE TABLE status (
    id SERIAL PRIMARY KEY,
    mortality VARCHAR(250),
    result VARCHAR(250),
    wallet_id INTEGER REFERENCES wallet(id)
);

-- ALTER TABLE "characters" ADD FOREIGN KEY ("id") REFERENCES "wallet" ("character_id");
-- ALTER TABLE "results" ADD FOREIGN KEY ("wallet_id") REFERENCES "wallet" ("id");



INSERT INTO status(mortality, result) VALUES 
('dead','The night is dark and full of terrors.Lights out for you'),
('dead','Sorry, you were brutally slain by a direwolf'),
('dead','A Faceless Man was no friend of yours. Sorry, you’re dead now'),
('dead', 'Oops. You encountered a dragon and were burnt to a crisp'),
('dead','The Lannisters send their regards'),
('dead', 'If you think this has a happy ending, you have not been paying attention. You are dead'),
('alive', 'Valar Morghulis'),
('alive', 'You have survived winter'),
('alive' , 'There is only one thing we say to death: Not today.');





INSERT INTO characters(name,house,weapon,honour) VALUES
('Jon Snow', 'House Stark','broad sword', 100),
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
('Balon Greyjoy','House Greyjoy', 'entertainment', 7),
('Oberyn Martell', 'House Martell', 'dual swords', 115),
('Margaery Tyrell','House Martell', 'persuasion', 3),
('Brienn of Tarth','House Tarth', 'broad sword', 113),
('Yara Greyjoy', 'House Greyjoy' , 'ships', 86),
('Ellaria Sand','House Martell', 'whip', 94),
('Red Woman','No Allegiance', 'magic', 133),
('Missandei of Naath','No Allegiance','nothing',1 ),
('Olena Martell' , 'House Martell','poison', 2);







COMMIT; 