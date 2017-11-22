const email = require('emailjs');
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

const server 	= email.server.connect({
   user:    "lynscott@lsphysique.com",
   password:" a61991ca",
   host:    "smtp.gmail.com",
   ssl:     true
});

app.post('/email', function (req, res) {
  var email = req.email;
  var text = req.text;
  var name = req.name;
  return server.send({
     text:    text,
     from:    "LS Fitness <lynscott@lsphysique.com>",
     to:      email,
     bcc:      "me <lynscott@lsphysique.com>",
     subject: "Testing Emailjs"
  }, function(err, message) { console.log(err || message); });
})


app.get('/ping', function (req, res) {
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


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
