const email = require('emailjs');
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const db = require('../models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'build')));

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


app.get('/contact', function (req, res) {
 return res.send('pong');
});

app.get('/users', function (req, res) {
 return res.json([{
      	id: 1,
      	username: "samsepi0l"
      }, {
      	id: 2,
      	username: "D0loresH4ze"
      }]);
});


// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(process.env.PORT || 8080);
