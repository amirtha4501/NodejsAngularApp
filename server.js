var http = require('http');

function onRequest (request, response) {
    console.log("Request received");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello from our application");
    response.end();
}
http.createServer(onRequest).listen(8888);

console.log("Server started on localhost port 8888");