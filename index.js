var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3210, 'localhost', () => {
    console.log('Running on port 3210')
});