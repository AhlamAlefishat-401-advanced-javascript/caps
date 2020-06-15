'use strict';

require('dotenv').config();

const events = require('./events');
const faker = require('faker');

events.on('delivered',(payload)=> console.log(`VENDOR: Thank you for delivering ${payload.id}`));

setInterval(function(){
  const payload = {
    storeName : process.env.STORE,
    id: faker.random.uuid(),
    customerName:faker.name.findName(),
    address:faker.address.city(),
  };
  events.emit('pickup',payload);

},5000);