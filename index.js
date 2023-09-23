var express = require('express')
var app = express()
const fs = require('fs')
const applog = new console.Console(fs.createWriteStream('./app.log'))

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

// app.get('/', function(req, res){
//     applog.log('making 32 random character')
//     res.send(makeid(32))
// });

app.get('/', function(req, res) {
    const response = 'EɝU�O��X�%��Az0=Door 1&1=Door 2';
    const charIndex = response.indexOf('=');
    const responseClean = response.substring(charIndex-1);
    const responseArray = responseClean.split('&');
    const data = [];
    for(let i = 0; i < responseArray.length; i++) {
        const dataArray = responseArray[i].split('=');
        data.push({
            id: dataArray[0],
            name: dataArray[1]
        });
    }
    res.send({
        status: 200,
        data: data
    });
});

app.listen(3210, () => {
    applog.log('Running on port 3210')
});