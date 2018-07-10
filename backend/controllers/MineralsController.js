var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fetch = require("node-fetch");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', function (request, response) {
	var minerals = [];
	const endpointUrl = 'https://query.wikidata.org/sparql',
		sparqlQuery = `SELECT ?mineral ?mineralLabel WHERE {
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
  ?mineral wdt:P279 wd:Q239825.
}
LIMIT 100`,
		fullUrl = endpointUrl + '?query=' + encodeURIComponent( sparqlQuery ),
		headers = { 'Accept': 'application/sparql-results+json' };

	fetch( fullUrl, { headers } ).then( body => body.json() ).then( json => {
		const { head: { vars }, results } = json;
		for ( const result of results.bindings ) {
			minerals.push( result.mineralLabel.value );

		}

		response.setHeader('Content-Type', 'application/json');
		response.send(JSON.stringify(minerals));
		response.status(200);
	} );
});

module.exports = router;
