// lib
const mylib = require('../../lib/lib');

const router = require('express').Router();

router.get('/', async function(req, res) {
  try {
    let isCustomerEmpty = await mylib.isCustomerEmptyPromise();
    if(isCustomerEmpty.condi) {
      console.log('-- empty --');
      res.send({empty: true});
    }
    else {
      console.log('-- non-empty --');
      res.send({empty: false});
    }
  }
  catch(err) {
    console.log('-- error --');
    console.error(err);
  }
});

module.exports = router;
