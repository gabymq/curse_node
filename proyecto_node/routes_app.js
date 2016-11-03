var express = require("express");
var Imagen = require("./models/imagenes");
var router= express.Router();
/*app.com/app/ */


router.get("/", function(req,res){
console.log('Hola desde get/');
	res.render("app/home");

	/* vamos a buscar al usuario*/

});

/*REST */
/*CRUD: Crear, analizar, actualizar y eliminar*/

router.get("/imagenes/new", function(req,res){
	res.render("app/imagenes/new");
});

router.get("/imagenes/:id/edit", function(req,req){
  Imagen.findById(req.params.id, function(err,imagen){
    res.render("app/imagenes/edit",{imagen:imagen});
  })

});

router.get("/imagenes/:id", function(req,res){
   Imagen.findById(req.params.id, function(err,imagen){
       res.render("app/imagenes/show",{imagen:imagen});
   });
});

router.put("/imagenes/:id", function(req,res){
   Imagen.findById(req.params.id, function(err,imagen){
   imagen.title= req.body.title;
   imagen.save(function(err){
      if(!err){
         res.render("app/imagenes/show",{imagen:imagen});
      }else{
         res.render("app/imagenes/"+imagen.id+"/edit",{imagen:imagen});
      }
    })
   
   });
});

router.delete("/imagenes/:id", function(req,resp){
   console.log("Borrar");
});

router.get("/imagenes", function(req,res){
   Imagen.find({}, function(err,imagenes){
      console.log(err,imagenes);
      if(err){res.redirect("/app"); return;}
      res.render("app/imagenes/index",{imagenes:imagenes});
   })
});

router.post("/imagenes", function(req,res){
   var data={
      title:req.body.title
   }
   var imagen= new Imagen(data);
   imagen.save(function(err){
      if(!err){
         res.redirect("/app/imagenes/"+imagen._id)
      }
      else{
         res.render(err);
      }
   });
});



module.exports=router;