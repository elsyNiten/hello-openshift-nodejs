const http = require('http');

const port = process.env.PORT || 8080;

http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello from OpenShift\ndeployed launch by githook");
}).listen(port);

console.log("Server running on port " + port);