const email = require('emailjs');
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const db = require('../models');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const routes = require('./routes/index');
const stripe = require("stripe")("sk_test_bll6DpA5V46aKqGVGImZiEoU");

const app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'public')));


const server = email.server.connect({
   user:    "YOUR_EMAIL_ADDRESS",
   password:" YOUR_PASSWORD",
   host:    "smtp.gmail.com",
   port:    587,
   tls:     true
});

app.post('/email', function (req, res) {
  var email = req.body.email;
  var text = req.body.text;
  var name = req.body.name;
  db.User.create(req.body.name, req.body.email)
  .then(function(newUser){
    res.json(newUser);
  })
  .catch(function(err){
    res.send(err);
  })
  console.log(email, text, name);
  return server.send({
     text:    req.body.text,
     from:    "LS Fitness <lynscott@lsphysique.com>",
     to:      req.body.email,
     bcc:      "me <lynscott@lsphysique.com>",
     subject: "Testing Emailjs - " + req.body.name
  }, function(err, message) { console.log(err || message); });
});


app.post('/pay', function (req, res) {
  var token = req.body.stripeToken;
  var mytoke = req.body.stripeToken;
  return stripe.charges.create({
    amount: 2900,
    currency: "usd",
    description: "Strength Plan Charge",
    source: token,
  }, function(err, charge) {
    res.status(200).send('200')
    // asynchronously called
  });
});


// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(process.env.PORT || 8080);
