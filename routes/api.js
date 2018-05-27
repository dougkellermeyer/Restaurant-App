var express = require('express');
var tables = require('../data/tables');
var waiting = require('../data/waiting');

module.exports = function () {
  var router = express.Router();

  router.get('/api/tables', function (req, res) {
    return res.json(tables);
  });

  router.get('/api/waitlist', function (req, res) {
    return res.json(waiting);
  });

  router.post('/api/tables', function (req, res) {
    if (tables.length < 5) {
      tables.push(req.body);

      return res.json(true);
    }

    waiting.push(req.body);

    return res.json(false);
  });

  router.post('/api/clear', function (req, res) {
    tables = [];
    waiting = [];

    res.json(true);
  });

  return router;
};
