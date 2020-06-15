'use strict';
const events = require('../events');
require('../driver');
jest.spyOn(global.console, 'log');

let order ={
  store: 'ahlam',
  orderId: 35507,
  customer: 'Delta Wunsch IV',
  address: 'Kiribati',
};

describe('Events', () => {

  it('pickup()', () => {
    events.emit('pickup', order);
    expect(console.log).toHaveBeenCalled();
  });

  it('in-transit()', () => {
    events.emit('in-transit', order);
    expect(console.log).toHaveBeenCalled();
  });

  it('delivered()', () => {
    events.emit('delivered', order);
    expect(console.log).toHaveBeenCalled();
  });

});

