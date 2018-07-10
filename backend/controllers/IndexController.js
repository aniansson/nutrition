var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var http = require('http');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', function (request, response) {
	var data = ['Fats', 'Fibres', 'Vitamins', 'Minerals', 'Water', 'Proteins', 'Carbohydrates'];
	response.setHeader('Content-Type', 'application/json');
	response.send(JSON.stringify(data));
	response.status(200);
});

module.exports = router;