const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('hello world')
})
app.get('/alien', function(req, res){
    res.send('welcome......')
})

app.get('/allien/20', function(req,res){
    res.send('hey reshma')
})
app.listen(9000, function(req, res){
    console.log('running......')
});