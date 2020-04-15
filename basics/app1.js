console.log(__filename); // gives this reference to the file
console.log(__dirname);

function printStuff() {
	console.log("This was from setInterval function");
}

// setTimeout(printStuff, 5000);

setInterval(printStuff, 2000);