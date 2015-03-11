var express = require( 'express' );
var app = express();
var morgan = require('morgan');
var server = app.listen( 3000 , function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("server listening %s:%s",host,port);
});
//var io = socketio.listen( server );


app.use( morgan('dev') );

app.get("/",function(req, res){
	res.send("Welcome");
});
