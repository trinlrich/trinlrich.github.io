const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {
    // console.log(req);
    fs.readFile('11_3.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(3000);