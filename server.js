var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require('mongoose');

var app = express();

app.use(express.static(__dirname));


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

app.listen(3000);
console.log("Server running on port 3000");
