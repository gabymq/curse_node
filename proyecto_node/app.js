var express= require("express");

var bodyParser= require("body-parser");
var User= require("./models/user").User;

var app= express();

//var mongoose= require("mongoose");
//var Schema= mongoose.Schema;



//Collecciones=> Tablas
//Documentos=> filas

//var userschemaJSON= {

	//email:String,
	//pasword: String,

//};

//var user_schema= new Schema(userschemaJSON);

//var User= mongoose.model("User", user_schema);

app.use("/public", express.static('public'));
//app.use(express.static('assets'));

app.use(bodyParser.json());// para peticiones aplication/json
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "pug");

app.get("/", function(req, res){
    res.render("index");
    
});

app.get("/login", function(req, res){
  User.find(function(err,doc){
	console.log(doc);
	res.render("login");
	

  }); 
   
});

app.post("/users",function(req,res){
    var user= new User({email:req.body.email,
                        password: req.body.password, 
                        password_confirmation: req.body.password_confirmation});
    console.log(user.password_confirmation);
   

    user.save(function(){
 	  res.send("Guardamos tus datos");

    });


});

app.listen(8080);
