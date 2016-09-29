var express= require("express");

var bodyParser= require("body-parser");
var User= require("./models/user").User;
var session= require("express-session");

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

app.use(session({
	secret:"123byuhbsdah12ub",
	resave: false,
	saveUninitialized: false
}));

app.set("view engine", "pug");

app.get("/", function(req, res){
	console.log(req.session.user_id);
    res.render("index");
    
});

app.get("/signup", function(req, res){
  User.find(function(err,doc){
  
  	console.log(doc);
  
	res.render("signup");
	

  }); 
   
});

app.get("/login", function(req, res){
  	res.render("login");
 
   
});


app.post("/users",function(req,res){

    var user= new User({
    	                email:req.body.email,
                        password: req.body.password, 
                        password_confirmation: req.body.password_confirmation,
                        username: req.body.username
                      });
    
   

    user.save().then(function(us){
    	res.send("Guardamos el usuario exitosamente");
    }, function(err){
    	if(err){
    	  console.log(String(err));
    	  res.send("No pudimos guardar la informacion");
    	}
    });

});

app.post("/sessions",function(req,res){
	console.log(req.body);
	//User.findId("57eafee4b512b0173bbe91ad",function(err,docs){
	
	//});

	User.findOne({email:req.body.email,password:req.body.password}, function(err,user)

	{
		req.session.user_id= user._id;
		res.send("Hola Mundo");
	});
   


   /* user.save(function(err,user,numero){
    	if(err){
    		console.log(String(err));
    	}
 	  res.send("Guardamos tus datos");

    });*/

});

app.listen(8080);
