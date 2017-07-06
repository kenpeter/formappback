// connect to db
const mongoose = require('mongoose');

const conn = require('../connect');

//
const Schema = mongoose.Schema;
//
const CustomerSchema = new Schema({
  name: String,
  age: Number,
  address: String,
  active: Boolean,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
//
const Customer = conn.model('Customer', CustomerSchema);
//
module.exports = Customer;
