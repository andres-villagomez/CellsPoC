/* MySQL reading */
/*var mysql = require('mysql');

var con = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"123456",
  database:"CELLS_DEMO"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT * FROM CELLS_DEMO_DATA";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("CELLS_DEMO_DATA Record Read");
  });
});*/
/* MySQL reading */

/* CSV reading */
const csv = require('csv-parser')
const fs = require('fs')
const results = [];
fs.createReadStream('ClusterData.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });
/* CSV reading */

/* REST service*/
const express = require("express");
const app = express();
app.get('/endpoint',function(req,res) {
  res.setHeader('Content-Type', 'application/json');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(JSON.stringify(results))
});
/* REST service*/

/* Comment */
app.listen(3000, () => {
  console.log("Server deployed in port 3000");
});
/* Comment */
