var http= require ("http"),
	fs = require ("fs"),
	parser= require ("./param_parser");


var p= parser.parse;

http.createServer(function(req, res){
	
	if(req.url.indexOf("favicon.ico")> 0 ){return;}

	fs.readFile("./index.html" ,function(err,html){
		
		var html_string=html.toString();
		var arreglo_parametros= [], paramentros={};
		
		var variables=html_string.match(/[^\{\}]+(?=\})/g);
		var nombre="";

		var paramentros= p(req);
	
		for (var i = variables.length - 1; i >= 0; i--) {
			//guardar el valor en variable variables de i, por lo tanto no se necesita poner en el acceso al objeto al array
			var variable = variables [i];
			//paramentros[variables[i]])
			// busque en hash de parametros de variables 
			html_string=html_string.replace("{"+variables [i]+"}", paramentros[variable] || '');
			//esto es el or logico, undefined es una cadena vacia
		};
		
		res.writeHead(200,{"Content-Type":"text/html"})
		res.write(html_string);
		res.end();
	});
}).listen(8080);




	//if (req.url.indexOf("?")> 0){
		// /?nombre=Uriel => ['/', 'nombre=Uriel']
		//var url_data= req.url.split("?");
		//var arreglo_parametros =url_data [1].split("&");
		//esto es para separar paramentros en la url
	//}
	
	//for (var i = arreglo_parametros.length - 1; i >= 0; i--) {
		//var parametro =arreglo_parametros[i];

		//nombre = Uriel
		//var param_data= parametro.split("=");
		// nombre, Uriel
		//paramentros[param_data[0]]=[param_data[1]];
		// tenemos un hash, en donde tenemos el nombre del parametro 'nombre y el parametro 'uriel' {nombre:Uriel}
		
	//}

	
	

