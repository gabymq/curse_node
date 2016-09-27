var mongoose= require("mongoose");
var Schema= mongoose.Schema;

mongoose.connect("mongodb://localhost/fotos");

var user_schema= new Schema({

  name: String,
  lastname:String,
  email: String,
  password: String,
  age: Number,
  date_of_birth: Date,

});

user_schema.virtual("password_confirmation").get(function(){
  return this.p_c;

}).set(function(password){
	this.p_c= password;
});

/*user_schema.virtual("full_name").get(function(){
  return this.name+ this.lastname;

}).set(function(fullname){
	var words= full_name.split("");
	this.name= words[0];
	this.lastname= words[1];
});
*/
var User= mongoose.model("User", user_schema);

module.exports.User= User;

/*
lod tipos de datos usados son
String
Number
Date
Buffer
Boolean
Mixed
Objectid
Array
*/