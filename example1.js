
/* ****** Modules ****** */

var http = require('http');


/* ****** Variables ****** */

var numberRequests = 1;


/* ****** Server ****** */

var server = http.createServer( function (request, response) {
	response.write( 'Hello World #' + numberRequests++ );
	response.end();
});

server.listen( 8080 );


