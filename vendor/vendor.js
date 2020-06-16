'use strict';
require('dotenv').config();
require('./events.js');
require('./caps.js');
const inquirer = require('inquirer');
const faker = require('faker');

const net = require('net');

const client = new net.Socket();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

client.connect(PORT, HOST, ()=> {console.log('#####connected####')});
const myStoreName = process.env.STORE;
client.on('data', (payload) => {
  let parsed = JSON.parse(payload.toString());

  if (parsed.event === 'delivered') {
    console.log(`Thank you for delivering order ${parsed.order.orderID}`);
  }
});

module.exports = function generateFake(){
  let fakeOrder =
  { store: myStoreName,
    orderID : faker.random.number(),
    customer : faker.name.findName(),
    address :`${faker.address.city()}, ${faker.address.country()}` };
    return fakeOrder;
  };
  
  client.write(JSON.stringify({ event: 'pickup', order: order }));

