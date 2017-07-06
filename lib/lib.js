// model
const Customer = require('../models/customer');


exports.isCustomerEmptyPromise = function isCustomerEmptyPromise() {
  return new Promise(function (resolve, reject) {

    Customer.count(function (err, count) {
      if (!err && count === 0) {
        // none
        let obj = { condi: true };
        console.log(count);
        resolve(obj);
      }
      else {
        let obj = { condi: false };
        console.log(count);
        resolve(obj);
      }      
    });

  });
}



