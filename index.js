var express = require('express')
var app = express()
const fs = require('fs')
const applog = new console.Console(fs.createWriteStream('./app.log'))

app.get('/', function(req, res){
    applog.log('Hello world!')
    res.send("Hello world!")
});

app.listen(3210, () => {
    applog.log('Running on port 3210')
});