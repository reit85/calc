const mongoose = require('mongoose');
const Model = mongoose.Schema;

const SupplierModel = new Model({
  name: String,
  description: String
})

module.exports = mongoose.model('SupplierModel', SupplierModel)