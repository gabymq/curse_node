function parse (req){

	var arreglo_parametros= [], paramentros={};

	if (req.url.indexOf("?")> 0){
		// /?nombre=Uriel => ['/', 'nombre=Uriel']
		var url_data= req.url.split("?");
		var arreglo_parametros =url_data [1].split("&");
		//esto es para separar paramentros en la url
	}

		for (var i = arreglo_parametros.length - 1; i >= 0; i--) {
		var parametro =arreglo_parametros[i];

		//nombre = Uriel
		var param_data= parametro.split("=");
		// nombre, Uriel
		paramentros[param_data[0]]=[param_data[1]];
		// tenemos un hash, en donde tenemos el nombre del parametro 'nombre y el parametro 'uriel' {nombre:Uriel}
		
	};

	return paramentros;
};

module.exports.parse= parse;