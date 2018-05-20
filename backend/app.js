var express = require('express');
var app = express();

var SomethingController = require('./controllers/SomethingController');
app.use('/something', SomethingController);

var MineralsController = require('./controllers/MineralsController');
app.use('/minerals', MineralsController);

module.exports = app;
