
/* ****** Modules ****** */

var express = require('express');



/* ****** Variables ****** */

var app = express();



/* ****** Middleware ****** */

app.use( express.static('./public') );




/* ****** Routes ****** */

app.get('/multiply/:x/:y', function( req, res, next ) {
	var x = parseInt( req.params.x );
	var y = parseInt( req.params.y );
	if( !x || !y ) return next();
	var json = {
		x: x,
		y: y,
		answer: x * y
	};
	res.send( json );
});

app.get('/multiply*', function( req, res ) {
	res.status(500).send( 'Syntax: /multiply/[number1]/[number2]' );
});



/* ****** Server ****** */

app.listen(8080);

