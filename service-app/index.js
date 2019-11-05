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
