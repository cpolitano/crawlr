'use strict';

var headers = {'Content-Type': 'text/html'};

function home(request, response){
  if ( request.url === '/') {
    response.writeHead(200, headers);
    response.end();
  }
}

module.exports.home = home;
