'use strict';

var http = require('http');
var routes = require('./routes');

var headers = {'Content-Type': 'text/html'};


http.createServer(function (request, response) {
  response.writeHead(200, headers);
  routes.home(request, response);
}).listen(3000);

console.log('Server running at http://localhost:3000');
