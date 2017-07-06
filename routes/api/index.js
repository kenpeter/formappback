var router = require('express').Router();

router.get('/', function(req, res){
  res.json("api page");
});
router.use('/getAllCustomers', require('./getAllCustomers'));

module.exports = router;
