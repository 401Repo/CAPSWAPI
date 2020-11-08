'use strict';

const chalk = require('chalk');
let host = ('http://127.0.0.1:4001');
let io = require('socket.io-client');
const superagent = require('superagent');

const caps = io.connect(`${host}/caps`);

caps.on('pickup', pickUpMessage);
caps.on('pickup', async (payload) => {
  try{
  const request = await superagent.post(`/delivered/${payload.storeName}/${payload.orderId}`);
  } catch {
  console.log(chalk.inverse.whiteBright('########## Send off ######'));
  }
});

caps.on('pickup', delivered);

function pickUpMessage(payload) {
  setTimeout( () => {
    console.log(chalk.inverse.yellowBright('DRIVER: Picked Up'), ': ');
    console.log(payload.orderId);
    console.log();
    caps.emit(chalk.inverse.greenBright('in-transit'), payload);
  }, 5000);
}

function delivered(payload) {
  setTimeout( () => {
    console.log(chalk.inverse.magentaBright('DRIVER: Delivered'), ': ');
    console.log(payload.orderId);
    console.log();
    caps.emit('delivered', payload);
  }, 3000);
}

////////////