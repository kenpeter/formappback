var router = require('express').Router();

router.get('/', function(req, res){
  res.json('api');
});

module.exports = router;
