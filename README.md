# Disgusting Oscillations

Super simple react UI for [Hydra](https://hydra.ojack.xyz/)

## Quick Start:
### Dev:
* `yarn start:all`
  * starts both backend and frontend and watches for file changes
* `yarn start`
  * starts frontend in dev mode and watches for file changes
* `server:start`
  * starts backend in dev mode and watches for file changes
### Prod:
* still need to figure out

### Config:
Currently the config vars are in `src/constants.js`. Ideally they would be in `.env` but certain guard rails imposed by `create-react-app` make that difficult. Everything should be easily changed there with a couple of exceptions.
* If you want to change the `CLIENT_PORT` variable, you will also have to create a `.env` file in the root of the project and set `PORT=` for your new port
* If you want to change the `HYDRA_WATCH_FILE` variable you will also have to change the `nodemonConfig`'s `ignore` setting in the `package.json` to match the file you want to watch

## Uses:
[create-react-app](https://create-react-app.dev/) for the UI

[Hydra-Synth](https://github.com/hydra-synth/hydra-synth) 

[socket.io](https://socket.io/)
