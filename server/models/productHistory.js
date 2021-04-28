const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const productHistorySchema = mongoose.Schema({
  product: { type: Schema.Types.ObjectId, ref: 'product' },
  type: { type: String, defualt: '' },
  creationDate: { type: Date },
});

module.exports = mongoose.model('ProductHistory', productHistorySchema);
