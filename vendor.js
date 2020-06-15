'use strict';
require('dotenv').config();
require('./events.js');
require('./caps.js');

const myStoreName = process.env.STORE;
const faker = require('faker');

module.exports = function generateFake(){
  let fakeOrder =
   { store: myStoreName,
     orderID : faker.random.number(),
     customer : faker.name.findName(),
     address :`${faker.address.city()}, ${faker.address.country()}` };
  return fakeOrder;
};

