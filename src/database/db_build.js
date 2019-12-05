const fs = require('fs');

const dbConnection = require('./db_connection');

// this has to run async because you want to run this before everything happens 
const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

// query takes a string as its first argument 

dbConnection.query(sql,(error,res)=>{
    if (error) throw error;
    console.log('game of thrones table created with results', res);
});