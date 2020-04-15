// Write Streams
var fs = require('fs');

var writeData = "Hello World";
var writableStream = fs.createWriteStream('output.txt');
writableStream.write(writeData, 'UTF8');
writableStream.end();
writableStream.on('finish', function() {
	console.log("Write completed");
})