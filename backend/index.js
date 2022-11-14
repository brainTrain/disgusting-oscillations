const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const cors = require('cors');
const server = http.createServer(app);
const { Server } = require('socket.io');
const CLIENT_PORT = 4000;
const SERVER_PORT = 3000;
const io = new Server(server, {
  cors: {
    origin: `http://localhost:${CLIENT_PORT}`,
  },
});

app.use(cors());

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(SERVER_PORT, () => {
  console.log(`listening on *:${SERVER_PORT}`);
});
