const tape = require("tape");
const runDbBuild = require("../src/database/db_build");
const getData = require("../src/queries/getData");
// const postData = require("../src/queries/postData");
const dbConnection = require("../src/database/db_connection.js");

  tape("select all data from characters table", t => {
  runDbBuild((err, res) => {
    if(err){
      console.log(err)
    } 
   let expected = [ { id: 1, name: 'Jon Snow', house: 'House Stark', weapon: 'broad sword', honour: 100 }, { id: 2, name: 'Daenerys Targaryen', house: 'House Targaryen', weapon: 'dragons', honour: 140 }, { id: 3, name: 'Ice King', house: 'No Allegiance', weapon: 'army of the dead', honour: 230 }, { id: 4, name: 'Ramsay Bolton', house: 'House Bolton', weapon: 'mind', honour: 80 }, { id: 5, name: 'Petyr Baelish', house: 'House Baelish', weapon: 'mind', honour: 40 }, { id: 6, name: 'Arya Stark', house: 'House Stark', weapon: ' short sword', honour: 120 }, { id: 7, name: 'Cersei Lannister', house: 'House Lannister', weapon: 'mind', honour: 30 }, { id: 8, name: 'Robb Stark', house: 'House Stark', weapon: 'direwolf', honour: 90 }, { id: 9, name: 'Jamie Lannister', house: 'House Lannister', weapon: ' broad sword', honour: 101 }, { id: 10, name: 'Tyrion Lannister', house: 'House Lannister', weapon: 'mind', honour: 65 }, { id: 11, name: 'Stannis Baratheon', house: 'House Baratheon', weapon: 'brute force', honour: 23 }, { id: 12, name: 'Balon Greyjoy', house: 'House Greyjoy', weapon: 'entertainment', honour: 7 }, { id: 13, name: 'Oberyn Martell', house: 'House Martell', weapon: 'dual swords', honour: 115 }, { id: 14, name: 'Margaery Tyrell', house: 'House Martell', weapon: 'persuasion', honour: 3 }, { id: 15, name: 'Brienn of Tarth', house: 'House Tarth', weapon: 'broad sword', honour: 113 }, { id: 16, name: 'Yara Greyjoy', house: 'House Greyjoy', weapon: 'ships', honour: 86 }, { id: 17, name: 'Ellaria Sand', house: 'House Martell', weapon: 'whip', honour: 94 }, { id: 18, name: 'Red Woman', house: 'No Allegiance', weapon: 'magic', honour: 133 }, { id: 19, name: 'Missandei of Naath', house: 'No Allegiance', weapon: 'nothing', honour: 1 }, { id: 20, name: 'Olena Martell', house: 'House Martell', weapon: 'poison', honour: 2 } ]
    
    getData((err, res) =>  {
      if (err) console.log(err);
      console.log(res,expected)
      t.deepEqual(expected,res,"returns all data from characters table");
      t.end();
    });
    
  
  })
});

