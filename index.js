var express = require('express');
var app = express();
var port = 3000;

app.listen(port);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/src/server.html', function(err){
        if (err){
            console.log("File not found");
        }
        else {
            console.log("Hi");
        }
    });
})
