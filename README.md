# Cells-Dinamic-Table
RestFull Dinamic Table

## Deploy Middleware : service-app

  Ctrl + Alt + T <br> 
  cd /Cells-Dinamic-Table/service-app <br>
  nvm ls <br>
  nvm use 8.11.4 <br>
  node index.js <br>
  //Keep Terminal Running <br>
  //Open Explorer and visit <br>
  //http://localhost:3000/endpoint <br>

## Deploy Fontend : modulo-cluster 

  Ctrl + Alt + T <br>
  cd /Cells-Dinamic-Table/modulo-cluster <br>
  nvm ls <br>
  nvm use 8.11.4 <br>
  cells component:serve <br>
  //Keep Terminal Running <br>
  //Open Explorer and visit <br>
  //http://localhost:8001/components/modulo-cluster/demo/index.html <br>


## Deploy Bakcend : SQL
  
  mysql -u root -p <br>
  //Deploy the SQL file content
