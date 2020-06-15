
const events = require('./events.js');
require('./caps.js');
const vendor = require('./vendor.js');

function readyForPickup(){
  setTimeout(() => {
    let fakeOrder = vendor();
    
    setTimeout(() => {
      events.emit('pickup',fakeOrder); 
      console.log(`DRIVER: picked up ${fakeOrder.orderId}`);
      
    }, 1000);
    
    setTimeout(() => {
      events.emit('in-transit', fakeOrder );
      console.log(`DRIVER: delivered up ${fakeOrder.orderId}`);
      console.log(`VENDOR: Thank you for delivering ${fakeOrder.orderId}`); 
      events.emit('delivered',fakeOrder); 
      console.log('Thank you');
    }, 3000),
    
    
    readyForPickup();
  }, 5000); 
}
readyForPickup();

 