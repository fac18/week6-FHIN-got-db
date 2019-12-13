const fs = require('fs');

const dbConnection = require('./db_connection');

// this has to run async because you want to run this before everything happens 
const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

// query takes a string as its first argument 

const runDbBuild = cb => dbConnection.query(sql, cb)

module.exports = runDbBuild