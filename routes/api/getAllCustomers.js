var router = require('express').Router();
const Customer = require('../../models/customer');

router.get('/', function(req, res) {
  Customer.find({}, function(err, doc){
    res.json(doc);
  });

});

module.exports = router;
