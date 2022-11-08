const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    let filename = "";

    console.log(q.pathname);
    switch (q.pathname) {
        case "/":
            filename = "index.html";
            break;
        case "/index.html":
            filename = "index.html";
            break;
        case "/introduction.html":
            filename = "introduction.html";
            break;
        default:
            filename = "11_3.html";
            break;
    }

    fs.readFile(filename, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(3000);