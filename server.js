/*server.js*/

var mysql = require('mysql');

const http = require('http');

const hostname = 'localhost';
const port = 3001;

const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    port:"3306"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');

});