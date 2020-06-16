const events = require('../events.js');
require('./driver.js');
const vendor = require('../vendor.js');
const net = require('net');

const PORT = process.env.PORT || 3000;

const server = net.createServer();
server.listen(PORT, () => {
  console.log(`Listenning on  Port${PORT}`);
});





function readyForPickup(){
  setTimeout(() => {
    let fakeOrder = vendor();
    
    setTimeout(() => {
      events.emit('pickup',fakeOrder); 
      console.log(`DRIVER: picked up ${fakeOrder.orderID}`);
      
    }, 1000);
    
    setTimeout(() => {
      events.emit('in-transit', fakeOrder );
      console.log(`DRIVER: delivered up ${fakeOrder.orderID}`);
      console.log(`VENDOR: Thank you for delivering ${fakeOrder.orderID}`); 
      events.emit('delivered',fakeOrder); 
    }, 3000),
    
    
    readyForPickup();
  }, 5000); 
}
readyForPickup();