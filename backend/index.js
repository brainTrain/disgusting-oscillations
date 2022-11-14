const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const cors = require('cors');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.use(cors());

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('bro', () => {
    console.log('bro?');
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
