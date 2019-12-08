# week6-FHIN-got-db
A Game of Thrones team builder

Learning Outcomes 

High-level concepts

- What is a database, and when should you use one?
- What is a relational database?
- What is the difference between a SQL database and a NoSQL database?
- What is a database schema? How do you design one?

Implementation and deployment

- How to set up a local instance of Postgres.
- How to set up a remote instance of Postgres (e.g. ElephantSQL).
- How to connect Node to a Postgres instance using PG.
- How to avoid security vulnerabilities (e.g. script injections).
- How to use PSQL to work with Postgres from the command line.

Testing

- How to keep your tests consistent using a test database and build script
- How to write tests for database queries
- SQL skills
- Understanding the standard query structure.
- How to retrieve information from a database.
- How to update a database table by adding, deleting or changing data.
- How to sort and filter results.
- An understanding of table joins and how to use them.
- An awareness of subqueries.


## Day 1

- Discussed project ideas

![Brainstorming](https://i.imgur.com/SXUWI5W.jpg)

- Decided on Game of Thrones database

![Wireframing](https://i.imgur.com/3BSuwHu.jpg)

- Mobbed software architecture, with config.env file, and installed our node packages as dependencies

![Architecture](https://i.imgur.com/s4mzF2F.jpg)

- Mobbed the schema using diagramdb. Started with MANY tabhttps://i.imgur.com/s4mzF2F.jpgles to try and understand the different relationships (one-to-one, on-to-many, many-to-many) But this way unnecessarily complicated. 

So we ended up with this...

## Schema
![](https://i.imgur.com/x5UV9Z6.png)

## Day 2 

- Created sql and js files in our database
- Modified sql info to better visualise clan builder

## User Journey

1. On homepage user is presented with table of Game of Thrones characters listing their name, house and weapon.
2. User is given instructions - select 3 characters to build their clan and survive Winter
3. User selects three characters using checkboxes/ radio buttons next to each row
4. User clicks submit button to lock-in their selection
5. User is returned with a response saying whether they're alive or dead. eg “A Lannister repaid their debt by taking your life”
6. Stretch - user inputs their name, if they survive a new table is shown of their team members

## Stop Go Continue

![SGC part 1](https://i.imgur.com/rFPtNgB.jpg)
![SGC part 2](https://i.imgur.com/cmeVYTJ.jpg)
