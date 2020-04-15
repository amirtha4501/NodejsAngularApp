var printStuff = function(stuff) {
	console.log(stuff);
}
function mainFunction(anotherFunction, value) {
	anotherFunction(value);
}
mainFunction( function(stuff) {
	console.log(stuff);
}, "Hello");


// call back functions
console.log('User 1 request');
setTimeout(callBack, 5000);
console.log('User 2 request');
setTimeout(callBack, 5000);
console.log('User 3 request');
setTimeout(callBack, 5000);

function callBack() {
console.log('Queried the Database & delivered in 5 seconds');
}


// Make custom modules
var athletics = require('./athletics')

athletics.relay();
athletics.longjump();


// http module
var http = require('http');
http.createServer(function(request, response) {
	response.writeHead(200, {"Content-type": "text/plain"});
	response.write("Hello world");
	response.end();
}).listen(8888);


// Event handling
var events = require('events');
var eventEmitter = new events.EventEmitter();

var ringbell = function() {
	console.log("Ring Ring Ring");
	eventEmitter.emit('bellrings', 'Welcome');
}

eventEmitter.on('doorOpen', ringbell);
eventEmitter.on('bellrings', function (message) {
	console.log(message)

})
eventEmitter.emit('doorOpen');


// Read file with async and sync
var fs = require('fs');
fs.readFile('index.txt', function(err, data) {
	if (err) {
		console.log(err);
	} 
	else {
		console.log('Async data is ' + data.toString());
	}
});
var data = fs.readFileSync('index.txt');
console.log('Sync data is ' + data.toString());
console.log('The end');