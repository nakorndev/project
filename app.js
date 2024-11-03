var http = require('http');

http.createServer(function (req, res) {
  var url = require('url');
  var pathname = url.parse(req.url).pathname;
  if (pathname == '/hello/:name') {
    var name = pathname.split('/').pop();
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello ' + name + '\n');
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  }
}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');

