'use strict';

const express = require('express');
const app = express();
const chalk = require('chalk');
let host = ('http://127.0.0.1:4001');
let io = require('socket.io-client');
///PORT 3001 because im uaing 4001 for socket
const PORT = process.env.PORT || 3001;
app.use(express.json());
const caps = io.connect(`${host}/caps`);

//////////Path to modify and store queue on the API
app.post('delivery/:storeName/:orderId', (req, res, next) => {

  const { storeName, orderId } = req.params;

  caps.emit('delivered', {
    store: storeName,
    code: orderId,
  });

  res.send(`Order for ${storeName} with order number ${orderId} was devlivered`);
});

app.post('/pickup', (req, res, next) => {

  console.log('hitting pickup route of API.');

});

caps.on('pickup', pickUpMessage);

function pickUpMessage(broadcast) {
  setTimeout( () => {
    console.log(chalk.inverse.yellowBright('API Sent:'), ': ');
    console.log(broadcast);
    console.log();
  }, 5000);
}

app.listen(PORT, () => {
  console.log(`API app listening at http://localhost:${PORT}`)
})
