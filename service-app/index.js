/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "CELLS_DEMO"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT * FROM CELLS_DEMO_DATA";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("CELLS_DEMO_DATA Record Read");
  });
});
*/
const express = require("express");
const app = express();
app.get('/endpoint',function(req,res){
  res.setHeader('Content-Type', 'application/json');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(JSON.stringify({
    "name":"Rose"
   }))
})

app.listen(3000, () => {
  console.log("Corriendo sobre puerto 3000");
});
