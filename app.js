const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    let filename = "";
    let filetype = "";

    switch (q.pathname) {
        case "/":
        case "/index":
            filename = "index.html";
            filetype = 'text/html';
            break;
        case "/introduction":
            filename = "introduction.html";
            filetype = 'text/html';
            break;
        case "/main.css":
            filename = "main.css";
            filetype = 'text/css';
            break;
        case "/img/me.jpg":
            filename = "img/me.jpg"
            filetype = 'image.jpg';
            break;
        case "/img/clarinet.webp":
            filename = "img/clarinet.webp"
            filetype = 'image/webp';
            break;
        case "/img/google_sheets.webp":
            filename = "img/google_sheets.webp"
            filetype = 'image.webp';
            break;
        case "/img/ncat_logo.png":
            filename = "img/ncat_logo.png"
            filetype = 'text/html';
            break;
        default:
            filename = "app.html";
            filetype = 'text/html';
            break;
    }

    fs.readFile(filename, function(err, data) {
        res.writeHead(200, {'Content-Type': filetype});
        res.write(data);
        res.end();
    });
}).listen(3000, function() {
    console.log("App started listening on port 3000.")
});