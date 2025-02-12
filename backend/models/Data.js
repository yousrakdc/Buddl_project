const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  sales: [{ month: String, revenue: Number }],
  users: [{ age: Number, count: Number }],
  categories: [{ name: String, value: Number }],
}, { collection: 'data' });

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
