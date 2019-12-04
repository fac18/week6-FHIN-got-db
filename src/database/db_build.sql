BEGIN;

DROP TABLE IF EXISTS characters, houses, weapons, powers, honour CASCADE;


CREATE TABLE characters (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL
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

CREATE TABLE powers (
    id SERIAL PRIMARY KEY,
    level INTEGER NOT NULL,
    character_id INTEGER REFERENCES characters(id) 
)

CREATE TABLE honour (
    id SERIAL PRIMARY KEY,
    points INTEGER NOT NULL,
    character_id INTEGER INTEGER REFERENCES characters(id) 
)


COMMIT;