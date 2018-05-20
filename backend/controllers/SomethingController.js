var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Instance = {  
    name: "ebba",
    email: "ebba@anaka.se",
    password: "123456"
};

// CREATES A NEW Instance
router.post('/', function (req, res) {
    res.status(200).send(Instance);
});

// RETURNS ALL THE InstanceS IN THE DATABASE
router.get('/', function (req, res) {
    res.status(200).send(Instance);
});

// GETS A SINGLE Instance FROM THE DATABASE
router.get('/:id', function (req, res) {
    res.status(200).send(Instance);
});

// DELETES A Instance FROM THE DATABASE
router.delete('/:id', function (req, res) {
    res.status(200).send(Instance);
});

// UPDATES A SINGLE Instance IN THE DATABASE
router.put('/:id', function (req, res) {
    res.status(200).send(Instance);
});


module.exports = router;