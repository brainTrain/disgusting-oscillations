/* eslint-disable no-undef*/
import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

import { SERVER_PORT, SERVER_BASE_URL, HYDRA_COMMAND } from './constants';
import './App.css';
import HydraSynth from 'hydra-synth';

// needed for hydra, not sure why or if there's a better solution
window.global = window;

const socket = io(`${SERVER_BASE_URL}:${SERVER_PORT}`);

function App() {
  const canvasEl = useRef(null);
  const [hydra, setHydra] = useState(null);
  const [hydraJSString, setHydraJSString] = useState('');

  // TODO: for some reason turning on the mic
  // makes the OBS audio output super quiet
  // investigate this so we can have fun with
  // the microphone
  // NOTE: this seems to be an open bug with webkit, firefox handles this stuff way better
  useEffect(() => {
    setHydra(() => {
      return new HydraSynth({
        detectAudio: true,
        canvas: canvasEl.current,
        // TODO: maybe make these local so we can potentially combine multiple cameras
        makeGlobal: true,
      });
    });
  }, []);

  useEffect(() => {
    socket.on(HYDRA_COMMAND, (newHydraJSString) => {
      // use function as setting to handle the case of many events coming in quickly
      // so we can ensure we're always setting a string for the latest value
      setHydraJSString(() => {
        return newHydraJSString;
      });
    });
  }, []);

  useEffect(() => {
    // if hydra is set up and there's a command in local state, execute it
    if (hydra && hydraJSString) {
      // using Function here because it's faster and safer than eval (still not totally save tho)
      const commandFn = Function(hydraJSString);
      try {
        commandFn();
      } catch (e) {
        console.error(e);
      }
    }
  }, [hydra, hydraJSString]);

  return (
    <div className="App">
      {/* TODO: figure out how responsive we wanna make this */}
      <canvas
        className="hydra-canvas"
        ref={canvasEl}
        height="892"
        width="946"></canvas>
    </div>
  );
}

export default App;
