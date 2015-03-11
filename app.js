var express = require( 'express' );
var app = express();
var morgan = require('morgan');
var swig = require('swig');

var store = require("./tweetBank.js"); // mst "./" it if not native

var server = app.listen( 3000 , function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("server listening %s:%s",host,port);
});

app.use( morgan('dev') );
app.engine("html", swig.renderFile);
app.set("view engine", 'html');
app.set('views',__dirname + "/" + "views");//app.use("/",function(req, res, next){
//	res.send("Welcome");
//	next();
//});
swig.setDefaults({ cache: false });

var routes = require('./routes/');
app.use('/', routes);
app.use(express.static(__dirname + '/public'));

//app.get("/",function(req, res, next){
//var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//	res.send("Welcome");
//	next();
//});
//app.get("/",function(req, res){//	res.render( 'index', {title: 'Hall of Fame', people: people, data: store.get } );//});

