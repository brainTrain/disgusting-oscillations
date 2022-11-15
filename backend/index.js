const { watch, readFile, watchFile } = require('node:fs');
const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const cors = require('cors');
const server = http.createServer(app);
const { Server } = require('socket.io');
const {
  CLIENT_PORT,
  SERVER_PORT,
  CLIENT_BASE_URL,
  HYDRA_WATCH_FILE,
  HYDRA_COMMAND,
  CONNECTION
} = require('../src/constants');

const io = new Server(server, {
  cors: {
    origin: `${CLIENT_BASE_URL}:${CLIENT_PORT}`,
  },
});

app.use(cors());

const WATCH_FILE_OPTS = {
  // half a second interval for percieved instant changes
  interval: 500,
};

io.on(CONNECTION, (socket) => {
  // watch file for changes
  watchFile(HYDRA_WATCH_FILE, WATCH_FILE_OPTS, (eventType, filename) => {
    // if there are changes, read file and emit event to socket
    readFile(HYDRA_WATCH_FILE, 'utf8', (err, data) => {
      // only send file contents if there's no error
      if (!err) {
        io.emit(HYDRA_COMMAND, data);
      }
    });
  });
});

server.listen(SERVER_PORT, () => {
  console.log(`listening on *:${SERVER_PORT}`);
});
