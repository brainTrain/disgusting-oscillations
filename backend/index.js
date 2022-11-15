const { watch, readFile, watchFile } = require('node:fs');
const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const cors = require('cors');
const server = http.createServer(app);
const { Server } = require('socket.io');
// TODO: take magic strings and make them shared consts
const CLIENT_PORT = 4000;
const SERVER_PORT = 3000;
const io = new Server(server, {
  cors: {
    origin: `http://localhost:${CLIENT_PORT}`,
  },
});

app.use(cors());

const PERFORMANCE_FILE = 'hydra-performance.js';
const WATCH_FILE_OPTS = {
  // half a second interval for percieved instant changes
  interval: 500,
};

io.on('connection', (socket) => {
  // watch file for changes
  watchFile(PERFORMANCE_FILE, WATCH_FILE_OPTS, (eventType, filename) => {
    // if there are changes, read file and emit event to socket
    readFile(PERFORMANCE_FILE, 'utf8', (err, data) => {
      // only send file contents if there's no error
      if (!err) {
        io.emit('hydra-command', data);
      }
    });
  });
});

server.listen(SERVER_PORT, () => {
  console.log(`listening on *:${SERVER_PORT}`);
});
