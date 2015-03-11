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

//app.use("/",function(req, res, next){
//	res.send("Welcome");
//	next();
//});

app.get("/",function(req, res, next){
	res.send("Welcome");
	next();
});

app.get("/news",function(req, res, next){
	res.send("This is the News");
	next();
});
