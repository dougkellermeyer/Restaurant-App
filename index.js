var express = require('express');
var bodyParser = require('body-parser');
var apiRoutes = require('./routes/api');
var htmlRoutes = require('./routes/html');

var app = express();

var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(apiRoutes());
app.use(htmlRoutes());

app.listen(port, function () {
  console.log('Started on Port: ' + port);
});
