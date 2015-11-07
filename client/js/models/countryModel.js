var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var countryModel = new Schema({
    countryName:String,
    mainUrl: String,
    breakfastUrl:String,
    lunchUrl:String,
    dinnerUrl:String,
    dessertUrl: String
});

module.exports = mongoose.model('country', countryModel, 'countries');