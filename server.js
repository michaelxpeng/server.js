var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleGoodRequest(request, response) {
  response.end("You have a good personality!");
};

function handleBadRequest(request, response) {
  response.end("You're mean!");
};

// create the server with request and response handler
var server1 = http.createServer(handleGoodRequest);
var server2 = http.createServer(handleBadRequest);

// tells the server to start listening for requests
server1.listen(PORT1, function() {
  console.log("Good server is up.");
  // server1.close();
});

server2.listen(PORT2, function() {
  console.log("Bad server is up.");
  // server2.close(); 
});