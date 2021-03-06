var express = require('express');
var app = express();

var IndexController = require('./controllers/IndexController');
app.use('/', IndexController);

var SomethingController = require('./controllers/SomethingController');
app.use('/something', SomethingController);

var MineralsController = require('./controllers/MineralsController');
app.use('/minerals', MineralsController);

var VitaminsController = require('./controllers/VitaminsController');
app.use('/vitamins', VitaminsController);

module.exports = app;
