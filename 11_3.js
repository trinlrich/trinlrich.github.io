const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('11_3.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(2000);



























// if (q.pathname == null) {
//     fs.readFile('index.html', function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         res.end();
//     });
// } else if (q.pathname == "index.html") {
//     fs.readFile('index.html', function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         res.end();
//     });
// } else if (q.pathname == "introduction.html") {
//     fs.readFile('index.html', function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         res.end();
//     });
// }