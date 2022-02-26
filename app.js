var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("Hello World");
});
console.log('Server start http://localhost:4000/')
app.listen(4000);