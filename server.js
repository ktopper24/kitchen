var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require('mongoose');

var app = express();

app.use(express.static(__dirname));

app.get('/',function(req,res){
  res.sendfile("index.html");
});

mongoose.connect('mongodb://localhost/kitchen');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback(){
  console.log('kitchen db opened');
});


var recipe = require('./client/js/models/recipeModel');

app.get('/recipes', function(req,res){
  recipe.find(function(err, doc){
    res.send(doc);
  });
});

app.post('/recipes', function(req,res){
  recipe.create({
    name: req.body.name,
    place: req.body.place,
    meal:req.body.meal,
    ingredients:req.body.ingredients,
    instructions:req.body.instructions
  });
});

app.listen(3000);
console.log("Server running on port 3000");
