var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('yes', { title: 'Express' });
});


module.exports = router;
