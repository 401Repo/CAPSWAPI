///////////////////////////////////////
'use strict';
const chalk = require('chalk');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

//Port from environment variable or default - 4001
const port =  4001;

///////////////////////////// the queue
const eventQueue = {}

//Setting up express and adding socketIo middleware
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const caps = io.of('/caps');

caps.on('connection', (socket) => {

  // First caps event
  socket.on('pickup', (payload) => {
    loggerMessage('PICKUP', payload);
    socket.broadcast.emit('pickup', payload);
  });
  //Delivered event
  socket.on('delivered', (payload) => {
    loggerMessage('DELIVERED', payload);
    caps.to(payload.storeName).emit('delivered', payload);
  });

  socket.on('in-transit', (payload) => {
    loggerMessage('IN-TRANSIT', payload);
  });

  // sending to all clients except sender

});


// Logger

function loggerMessage(event, payload) {
  console.log(chalk.inverse.blueBright(event), ': ');
  console.log({
    time: new Date().toString(),
    payload: payload,
  });
}

server.listen(port, () => console.log(`IO socket listening on port ${port}`));

