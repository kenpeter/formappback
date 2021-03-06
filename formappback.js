// express
const express  = require('express');
// express instance
const app = express();
// parse incoming post request, to use as key-value or json
const bodyParser  = require('body-parser');
// log on console
const morgan = require('morgan');
// db
const mongoose = require('mongoose');
// the db and secret
const config = require('./config'); // get our config file

// lib
const mylib = require('./lib/lib');

// model
const Customer = require('./models/customer');

// port
const port = process.env.PORT || 8015; // used to create, sign, and verify tokens

//
app.use(bodyParser.urlencoded({ extended: false }));
//
app.use(bodyParser.json());

// express app can use morgon (dev)
// use morgan to log requests to the console
app.use(morgan('dev'));

// need to exports it, so ./routes/api/index.js can use this express instance.
module.exports = app;

// note if one of the routes not configure, will throw
// TypeError('Router.use() requires middleware function but got a
app.use('/setup', require('./routes/setup'));
app.use('/', require('./routes/home'));
app.use('/api', require('./routes/api'));

// listen
app.listen(port);
console.log(`listent to port: ${port}`);
