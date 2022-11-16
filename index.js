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
  CONNECTION,
  HYDRA_WATCH_FILE_INTERVAL,
} = require('./src/constants');

const io = new Server(server, {
  cors: {
    origin: `${CLIENT_BASE_URL}:${CLIENT_PORT}`,
  },
});

app.use(cors());
app.use('/static', express.static(path.join(__dirname, '/build/static')));
app.use('/', express.static(path.join(__dirname, '/build')));

const WATCH_FILE_OPTS = {
  interval: HYDRA_WATCH_FILE_INTERVAL,
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

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

server.listen(SERVER_PORT, () => {
  console.log(`listening on *:${SERVER_PORT}`);
});
