const exp = require("express");
const path = require('path');
const app = exp();
const port = 3000;

app.get('/grade', (req, res) => res.sendFile(path.join(__dirname, '/app.html')));

app.get('/grade/get', (req, res) => res.send('Got a GET request at /grade'));
app.post('/grade/post', (req, res) => res.send('Got a POST request at /grade'));
app.put('/grade/put', (req, res) => res.send('Got a PUT request at /grade'));
app.delete('/grade/delete', (req, res) => res.send('Got a DELETE request at /grade'));

app.listen(port, () => console.log("App started listening on port " + port));