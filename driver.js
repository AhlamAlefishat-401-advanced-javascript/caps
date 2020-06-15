'use strict';

const events = require('./events');

events.on('readyForPickup',(payload) =>{
  setTimeout(function transit(){
    console.log(`driver : picked up ${payload.id}`);
    events.emit('in-transit',payload);
    setTimeout(function delivered(){
      events.emit('delivered',payload);
    },3000);
  },1000);

});