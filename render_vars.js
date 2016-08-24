var http= require ("http"),
	fs = require ("fs");




http.createServer(function(req, res){
	
	fs.readFile("./index.html" ,function(err,html){
	
	var html_string=html.toString();
	//busca en el html lo que haya dentro de las {}
	var variables=html_string.match(/[^\{\}]+(?=\})/g);
	var nombre="Codigo Facilito";
	// variables = a un arreglo de strings de todo lo que encontramos entre llaves [nombre]//
	for (var i = variables.length - 1; i >= 0; i--) {
		var value = eval(variables [i]);
		//lo ejecutamos como codigo de javascript
		//para obtener el valor de dicha variable
		html_string=html_string.replace("{"+variables [i]+"}", value);
		//reemplazar el contenido con {x} por su valor correspondiente
	};
	
	//despues mandamos el contenido y listo
	res.writeHead(200,{"Content-Type":"text/html"})
	res.write(html_string);
	res.end();
});

}).listen(8080);
