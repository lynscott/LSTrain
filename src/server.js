const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

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
