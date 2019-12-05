const dbConnection = require("../database/db_connection");


const getData = (cb) => {
    dbConnection.query('SELECT name, house, weapon FROM characters', (err,res)=>{
        if(err) return cb(err);
        console.log('get data call = res.rows: ' + res.rows);
        cb(null, res.rows);
    });
};

module.exports = getData;