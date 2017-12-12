const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
  goodleID: String,
  name: String,
  gender: String,
  email: String
});

mongoose.model('users', userSchema);
