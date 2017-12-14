const mongoose = require('mongoose');
const { Schema } = mongoose;
const planStartSchema = require('./StartPlan');

const planSchema = require('./Plans');

const userSchema = new Schema ({
  googleID: String,
  facebookID: String,
  name: String,
  img: String,
  gender: String,
  email: String,
  date: Date,
  plans: [String]
});

mongoose.model('users', userSchema);
