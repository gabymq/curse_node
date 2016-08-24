var http=require("http");

var manejador = function(solicitud, respuesta){

	console.log("recibimos una nueva peticion");
	respuesta.end("hola mundo");
};

var servidor = http.createServer(manejador);

	servidor.listen(8080);