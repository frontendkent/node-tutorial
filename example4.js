
/* ****** Modules ****** */

var express = require('express');
var consolidate = require('consolidate'); 
var sass = require('node-sass');

/* ****** Variables ****** */

var numberRequests = 1;
var app = express();




/* ****** Middleware ****** */

app.engine('shtml', consolidate.swig);
app.set('view engine', 'shtml');

app.use( express.static('./public') );




/* ****** Routes ****** */

app.get('/styleguide.css', function( req, res ) {
	var filename = __dirname + '/views/styleguide.scss';
	sass.render({
	  file: filename,
	}, function(err, result) { 
		res.setHeader("content-type", "text/css");
		res.send( result.css );
	});
});

app.get('/:page', function( req, res ) {
	res.render( 'page' , {
		page: req.params.page,
		datetime: new Date().toString()
	});
});





/* ****** Server ****** */

app.listen(8080);

