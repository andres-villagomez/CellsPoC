# Cells-Dinamic-Table
RestFull Dinamic Table

## Deploy Middleware : service-app

  Ctrl + Alt + T 
  cd /Cells-Dinamic-Table/service-app
  nvm ls
  nvm use 8.11.4
  node index.js
  //Keep Terminal Running
  //Open Explorer and visit 
  //http://localhost:3000/endpoint

## Deploy Fontend : modulo-cluster

  Ctrl + Alt + T
  cd /Cells-Dinamic-Table/modulo-cluster
  nvm ls
  nvm use 8.11.4
  cells component:serve
  //Keep Terminal Running
  //Open Explorer and visit 
  //http://localhost:8001/components/modulo-cluster/demo/index.html


## Deploy Bakcend : SQL
  
  mysql -u root -p
  //Deploy the SQL file content
  
