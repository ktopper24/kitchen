var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var recipeModel = new Schema({
  name:String,
  place: String,
  meal:String,
  ingredients:Array,
  instructions:Array
});

module.exports = mongoose.model('recipe', recipeModel, 'recipes');
