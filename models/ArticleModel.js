const mongoose = require('mongoose');
const Model = mongoose.Schema;

//Achtung Verwendung von Model anders ...
const ArticleModel = new mongoose.Schema({
  supplierId: String,
  nameDe: String,
  nameEn: String,
  descriptionDe: String,
  descriptionEn: String,
  category: String,
  priceType: String,
  price: Number
})

module.exports = mongoose.model('ArticleModel', ArticleModel)