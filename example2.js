
/* ****** Modules ****** */

var express = require('express');



/* ****** Variables ****** */

var numberRequests = 1;
var app = express();



/* ****** Routes ****** */

app.get('/', function(req,res) {
	res.send( 'Hello World #' + numberRequests++ );
});



/* ****** Server ****** */

app.listen(8080);


