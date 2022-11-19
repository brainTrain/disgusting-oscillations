// ┬─┬ノ( º _ ºノ)
// a.setBins(12);
/*
.saturate(() => {
  return a.fft[0] * 10;
})
*/
s0.initCam(2);
src(s0)
  // .scrollY([-0.2, 0, -2, 0.2, -0.2, 0, 0.2].ease('easeInOutCubic'))
  // .saturate(() => a.fft[0] * 1000)
  // .saturate(() => Math.sin(time) * 10)
  // .blend(kaleid(5))
  .saturate(() => a.fft[0] * 10)
  // .saturate(() => mouse.x * 0.009)
  // .saturate(({ time }) => Math.sin(time) * 10)
  .diff(
    shape(4)
      .scale(0.1, 1, () => a.fft[0])
      .scrollX(0),
  )
  .diff(
    shape(4)
      .scale(0.1, 1, () => a.fft[1])
      .scrollX(0.05),
  )
  .diff(
    shape(4)
      .scale(0.1, 1, () => a.fft[2])
      .scrollX(0.1),
  )
  .diff(
    shape(4)
      .scale(0.1, 1, () => a.fft[3])
      .scrollX(0.15),
  )
  // .blend(osc(60, 0.3, 3).rotate(2))
  // .modulate(noise(1, () => a.fft[0] * 0.01))
  // .modulate(o0, () => mouse.x * 0.003)
  .out();
/*
src(s0)
  .scrollY(() => time * mouse.y * 0.000003)
  .scrollX(() => time * mouse.x * 0.000003)
  // .scale(() => a.fft[0] * 8)
  // .modulate(noise(1, () => a.fft[0] * 0.01))
  .saturate(({ time }) => {
    return a.fft[0] * 10;
  })
  .modulate(o0, () => a.fft[0] * 0.05)
  .modulate(o0, () => mouse.x * 0.0003)
  // .scrollX(0, () => a.fft[0] * 0.001)
  .out();
 */
