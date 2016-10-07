var express = require("express");

var router= express.Router();
/*app.com/app/ */

router.get("/", function(req,res){
	res.redender("app/home");

	/* vamos a buscar al usuario*/

});

module.exports=router;