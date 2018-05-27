var path = require('path');
var express = require('express');

module.exports = function () {
  var router = express.Router();

  router.get('/tables', function (req, res) {
    return res.sendFile(path.join(__dirname, '../public/tables.html'));
  });

  router.get('/reserve', function (req, res) {
    return res.sendFile(path.join(__dirname, "../public/reserve.html"));
  });

  router.get('*', function (req, res) {
    return res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  return router;
};
