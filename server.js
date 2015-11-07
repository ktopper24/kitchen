var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require('mongoose');

var app = express();

app.use(express.static(__dirname));
app.use(express.bodyParser());

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
    RecipeName: req.body.RecipeName,
    place: req.body.place,
    meal:req.body.meal,
    ingredients:req.body.ingredients,
    instructions:req.body.instructions
  });
});


var country = require('./client/js/models/countryModel');

app.get('/countries', function(req,res){
  country.find(function(err, doc){
    res.send(doc);
  });
});

app.get('/getcountry', function(req,res){
  var countryName = req.query.country;
  country.findOne({name: countryName} , function(err, doc){
    res.send(doc);
  });
});

app.post('/countries', function(req,res){
  country.create({
    countryName: req.body.countryName,
    mainUrl: req.body.mainUrl,
    breakfastUrl:req.body.breakfastUrl,
    lunchUrl:req.body.lunchUrl,
    dinnerUrl:req.body.dinnerUrl,
    dessertUrl:req.body.dessertUrl
  });
});

app.listen(3000);
console.log("Server running on port 3000");
