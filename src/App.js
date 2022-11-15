/* eslint-disable no-undef*/

import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import './App.css';
import HydraSynth from 'hydra-synth';
// TODO: take magic strings and make them shared consts
const SERVER_PORT = 3000;

// needed for hydra, not sure why or if there's a better solution
window.global = window;

const socket = io(`http://localhost:${SERVER_PORT}`);

function App() {
  const canvasEl = useRef(null);
  const [hydra, setHydra] = useState(null);
  const [hydraJSString, setHydraJSString] = useState('');

  useEffect(() => {
    setHydra(() => {
      return new HydraSynth({
        detectAudio: true,
        canvas: canvasEl.current,
        precision: 'mediump',
        // TODO: maybe make these local so we can potentially combine multiple cameras
        makeGlobal: true,
      });
    });
  }, []);

  useEffect(() => {
    socket.on('hydra-command', (newHydraJSString) => {
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
      commandFn();
    }
  }, [hydra, hydraJSString]);

  return (
    <div className="App">
      {/* TODO: figure out how responsive we wanna make this */}
      <canvas
        ref={canvasEl}
        style={{
          width: '100%',
          height: '100%',
        }}
        height="892"
        width="946"></canvas>
    </div>
  );
}

export default App;
