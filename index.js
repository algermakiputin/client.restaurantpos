const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: '*:*'
});  

io.on('connection', (socket) => {
    socket.on('new order', (order) => {
        console.log(order);
    })
});



server.listen(8181, () => {
  console.log('listening on *:8181');
});