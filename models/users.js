//Name
//email
//created date

var mongoose = require('mongoose');

var freeUser = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name cannot be blank!'
  },
  email : {
    type: String,
    required: 'Email cannot be blank!'
  },
  sent_date: {
    type: Date,
    default: Date.now
  }
});

var User = mongoose.model('User', freeUser );

module.exports = User;
