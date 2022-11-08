const exp = require("express");
const app = exp();

// app.get('/', (req, res) => res.send('Hello World!')); // Same thing as below

// app.get('/', function(req, res) { 
//     res.send('Hello World!')
// });

// app.listen(80, () => console.log("Example app listening on port 80!"));

const tweets = [
    {id: 1, year: 2018, month: 3, text: "This is my first tweet!"},
    {id: 2, year: 2020, month: 10, text: "Learning NodeJS..."},
    {id: 1, year: 2023, month: 5, text: "Adding Express Module."}
];

app.all('/api/tweets', function (req, res, next) {
    console.log('Accessing the test section ...')
    next() // pass control to the next handler
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'htmldocs/index.html'));
}) 

app.get('/api/tweets', function(req, res) {
    res.send(tweets);
})

app.listen(80, function() {
    console.log("App started listening on port 80");
})