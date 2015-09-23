var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(__dirname));

app.get('/api/getrecipes', function(req,res) {
  var recipes = [
    {
      name: "Spaghetti",
      place: "Italy",
      meal: "Dinner",
      ingredients: ["pasta", "tomatoes", "oregano"],
      instructions: ["mix sauce in pan", "boil water", "cook pasta"]
    }
  ];
  res.setHeader('Content-Type', 'application/json');
  res.json(recipes);
});

app.listen(3000);
console.log("Server running on port 3000");
