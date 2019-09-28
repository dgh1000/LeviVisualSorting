const express = require('express')
const app = express()
const request = require('request');
const ejs = require('ejs');
const path = require('path');
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/test.html'));
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
