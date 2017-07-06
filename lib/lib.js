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


exports.insertSampleCustomerPromise1 = function insertSampleCustomerPromise1() {
  return new Promise(function (resolve, reject) {
    const customer = new Customer({
      name: "Peter",
      age: 34,
      address: "123 teller road",
      active: 1
    });

    customer.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- saved --");
        resolve(doc);
      }
    });
  });
}


exports.insertSampleCustomerPromise2 = function insertSampleCustomerPromise2() {
  return new Promise(function (resolve, reject) {
    const customer = new Customer({
      name: "Bernie",
      age: 23,
      address: "2 Normanby street",
      active: 1
    });

    customer.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- saved --");
        resolve(doc);
      }
    });
  });
}



exports.insertSampleCustomerPromise3 = function insertSampleCustomerPromise3() {
  return new Promise(function (resolve, reject) {
    const customer = new Customer({
      name: "Peter",
      age: 41,
      address: "12 Cane Drive",
      active: 0
    });

    customer.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- saved --");
        resolve(doc);
      }
    });
  });
}


exports.insertSampleCustomerPromise4 = function insertSampleCustomerPromise4() {
  return new Promise(function (resolve, reject) {
    const customer = new Customer({
      name: "Joel",
      age: 56,
      address: "32 Dawn Street",
      active: 1
    });

    customer.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- saved --");
        resolve(doc);
      }
    });
  });
}
