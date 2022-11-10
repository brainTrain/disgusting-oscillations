/* eslint-disable no-undef*/

import { useEffect, useRef, useState } from 'react';
import './App.css';
import HydraSynth from 'hydra-synth';

window.global = window;

function App() {
  const canvasEl = useRef(null);
  const [hydra, setHydra] = useState(null);

  useEffect(() => {
    setHydra(() => {
      return new HydraSynth({
        detectAudio: true,
        canvas: canvasEl.current,
        precision: 'mediump',
        makeGlobal: true,
      });
    });
  }, []);

  useEffect(() => {
    console.log('uhhhhhh');
    console.log(hydra);
    if (hydra) {
      s0.initCam(0);
      src(s0)
        .scrollX(0, () => Math.sin(time * 0.05) * 0.00005)
        .scrollY([-0.2, 0, -2, 0.2, -0.2, 0, 0.2].ease('easeInOutCubic'))
        .scrollY(() => time * mouse.y * 0.00003)
        .scrollX(() => time * mouse.x * 0.00003)
        .scale(1)
        .modulate(noise(1, 0.0000000025))
        .saturate(({ time }) => Math.sin(time) * 10)
        // .modulate(o0, () => mouse.x * 0.0003)
        .out();
    }
  }, [hydra]);

  return (
    <div className="App">
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
