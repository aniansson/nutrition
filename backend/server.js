var reload = require('./node_modules/reload');
var app = require('./app');
var port = process.env.PORT || 3000;

reload(app);

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});

