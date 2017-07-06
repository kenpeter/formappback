// model
const Customer = require('./models/customer');

Customer.remove({}, function(err, res){
  console.log('-- done remove user --');
  process.exit(0);
});
