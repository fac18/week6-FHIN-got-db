const dbConnection = require("../database/db_connection");

const getData = (cb) => {
    dbConnection.query('SELECT id, name, house, weapon FROM characters', (err,res)=>{
        if(err) return cb(err);
        cb(null, res.rows);
    });
};

// database summation file
// const getHonour = (cb) => {
//     dbConnection.query(`SELECT SUM(honour) FROM characters WHERE ${}`, (err,res)=>{
//         if(err) return cb(err);
//         cb(null, res.rows);
//     });
// };

const getHonour = (cb) => {
    dbConnection.query('SELECT id, honour FROM characters', (err,res)=>{
        if(err) return cb(err);
        cb(null, res.rows);
    });
};


module.exports = {
    getData,
    getHonour}