var http = require('http');
var url = require('url');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); //write the status Code 200 and the Content-Type expected
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt); //end the response
}).listen(8080); //the server object listens on port 8080

// Run `node 04-http-module-01-demo_http.js`
// On the browser `http://localhost:8080/?year=2017&month=July`
