'use strict';

const chalk = require('chalk');
const faker = require('faker');
let host = ('http://127.0.0.1:4001');
let io = require('socket.io-client');

const caps = io.connect(`${host}/caps`);
///////////


//////experiment


caps.on('delivered', pickUpMessage);

function pickUpMessage(payload) {
  setTimeout( () => {
    console.log(chalk.inverse.yellowBright('Order done and delivered!: '), ' ');
    console.log(payload);
    console.log();
  }, 5000);
}

////////
let x = 0;

let intervalID = setInterval( () => {
  let payload = {
    storeName: faker.company.companyName(),
    orderId: faker.random.uuid(),
    customerName: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  setTimeout( () => {
    console.log(chalk.inverse.greenBright(`Thank you for ORDER: `));
    console.log(payload.storeName);
    console.log(payload.orderId);
    console.log(payload.customerName);
    console.log(payload.address);
  }, 5000);
  caps.emit('pickup', payload);
  if (++x === 6){
    console.log('Stopping at 5 to work on Queue')
    clearInterval(intervalID)
  }
}, 5000);
