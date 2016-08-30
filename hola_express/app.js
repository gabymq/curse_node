var express= require("express");


var app= express();

app.get("/", function(req, res){

	res.send("Hola mundo");
	res.end();
});

app.listen(8080);