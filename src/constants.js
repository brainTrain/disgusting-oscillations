module.exports = {
  // client vars
  // NOTE: if you change the CLIENT_PORT var, you will have to create a local .env file at the root
  // of the project and set it there as well using PORT (ex: if the new port is 42069 you can set it
  // using PORT=42069 otherwise the create-react-app kiddy bumpers won't work (the way they make .env
  // difficult to use is super frustrating. I just want a dang mono repo for this thing without needing to eject!)
  CLIENT_PORT: process.env.NODE_ENV === 'production' ? 4000 : 3000,
  CLIENT_BASE_URL: 'http://localhost',
  // server vars
  SERVER_PORT: 4000,
  SERVER_BASE_URL: 'http://localhost',
  // NOTE: if you change this file you will also have to change the `nodemonConfig`'s `ignore` setting in the `package.json`
  HYDRA_WATCH_FILE: 'hydra-performance.js',
  HYDRA_WATCH_FILE_INTERVAL: 500,
  // socket.io event strings
  CONNECTION: 'connection',
  HYDRA_COMMAND: 'hydra-command',
};
