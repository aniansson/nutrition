var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', function (request, response) {
	response.status(200).send('' + fs.readFileSync('views/VitaminsPage.html'));
});

module.exports = router;