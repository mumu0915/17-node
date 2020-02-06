var http = require('http');
var url = require('url');
var querystring = require('querystring')

http.createServer(function (request, response) {
    if (request.url !== '/favicon.ico') {
        console.log(request);
        console.log(request.url);
        console.log(url.parse(request.url));
        console.log(querystring.parse(url.parse(request.url).query));
        
    
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello World');
    }

}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');