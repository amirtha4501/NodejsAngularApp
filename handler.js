function home(response) {
    console.log("Executing 'home' handler");
    var htmlfile = '<html>' +
    '<head>'+
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '</head>' +
    '<body>' +
    '<form action="/review" method="POST"></form>' +
    '<textarea name="text" cols="60" rows="20"></textarea>' +
    '<input type="submit" value="submit text">' +
    '</body>' +
    '</html>' ;
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write(htmlfile);
    response.end();
}

function review() {
    console.log("Executing 'review' handler");
}

exports.home = home;
exports.review = review;