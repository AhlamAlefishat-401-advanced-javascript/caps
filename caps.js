'use strict';
require('./vendor');
require('./driver');

const events = require('./events');

events.on('readyForPickup',(payload)=> logger('readyForPickup',payload));
events.on('in-Transit',(payload)=> logger('in-transit',payload));
events.on('delivered',(payload)=> logger('delivered',payload));

function logger(event,payload){
  const eventsDetails = {
    event:event,
    time:new Date(),
    payload:{payload},
  };

  console.log('event',eventsDetails);
}
