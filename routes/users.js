var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/aaa', function(req, res, next) {
  res.send('lalalalala');
});

router.get('/aaa111', function(req, res, next) {
  res.send('lalalalala111');
});

module.exports = router;
