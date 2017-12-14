const mongoose = require('mongoose');
const { Schema } = mongoose;

const planStartSchema = new Schema ({
  name: String,
  started: {type: Boolean, default: false},
  startDate: Date
});

module.exports = planStartSchema;
