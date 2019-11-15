# Cells Dinamic Table
RestFull Dinamic Table

![Cells 2.7.12](https://img.shields.io/badge/Cells-2.7.12-blue)
![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)
![NPM 8.11.4](https://img.shields.io/badge/NPM-8.11.4-critical)
![Java Script ES6](https://img.shields.io/badge/Java%20Script-ES6-red)

## Deploy Middleware : service-app
```html
  Ctrl + Alt + T
  cd /Cells-Dinamic-Table/service-app
  nvm ls
  nvm use 8.11.4
  node index.js
```  
  Keep Terminal Running<br>
  Open Explorer and visit<br>
  http://localhost:3000/endpoint<br>

## Deploy Fontend : modulo-cluster 
```html
  Ctrl + Alt + T
  cd /Cells-Dinamic-Table/modulo-cluster
  nvm ls
  nvm use 8.11.4
  cells component:serve
```
  Keep Terminal Running <br>
  Open Explorer and visit <br>
  http://localhost:8001/components/modulo-cluster/demo/index.html <br>

## Deploy Bakcend : SQL
```html
  mysql -u root -p
```
  Deploy the SQL file content <br>

## HotFix Requirements

  Install CORS Everywhere plugin in your explorer.<br>
  CORS Everywhere works as a: <br>
  Bypass CORS restrictions by altering http responses. 
