// lib
const mylib = require('../../lib/lib');

const router = require('express').Router();

router.get('/', async function(req, res) {
  try {
    let isCustomerEmpty = await mylib.isCustomerEmptyPromise();
    if(isCustomerEmpty.condi) {
      console.log('-- customer collection is empty --');

      // insert
      let customer1 = await mylib.insertSampleCustomerPromise1();
      let customer2 = await mylib.insertSampleCustomerPromise2();
      let customer3 = await mylib.insertSampleCustomerPromise3();
      let customer4 = await mylib.insertSampleCustomerPromise4();

      res.send({done: true});
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
