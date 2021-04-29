let mongoose = require('mongoose');
const { Schema } = require('mongoose');

let productSchema = mongoose.Schema({
  name: { type: String, defualt: '' },
  description: { type: String, defualt: '' },
  supplierName: { type: String, defualt: '' },
  priceUsd: { type: Number, defualt: 0 },
  priceIls: { type: Number, defualt: 0 },
  url: { type: String, defualt: '' },
  picture: { type: String, defualt: '' },
  quantity: { type: Number, defualt: 0 },
  productHistory: [{ type: Schema.Types.ObjectId, ref: 'ProductHistory' }],
});

module.exports = mongoose.model('Product', productSchema);
