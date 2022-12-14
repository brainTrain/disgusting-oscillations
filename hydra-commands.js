s0.initCam(0);
src(s0)
  .scrollX(0, () => Math.sin(time * 0.05) * 0.00005)
  .scrollY([-0.2, 0, -2, 0.2, -0.2, 0, 0.2].ease('easeInOutCubic'))
  .scrollY(() => time * mouse.y * 0.00003)
  .scrollX(() => time * mouse.x * 0.00003)
  .scale(1)
  .modulate(noise(1, 0.0000000025))
  .saturate(({ time }) => Math.sin(time) * 10)
  .modulate(o0, () => mouse.x * 0.0003)
  .out();
src(s0)
  .scrollY(() => time * mouse.y * 0.000003)
  .scrollX(() => time * mouse.x * 0.000003)
  // .scale(() => a.fft[0] * 8)
  .modulate(noise(1, () => a.fft[0] * 0.01))
  .saturate(({ time }) => a.fft[0] * 10)
  .modulate(o0, () => a.fft[0] * 0.05)
  .modulate(o0, () => mouse.x * 0.0003)
  .scrollX(0, () => a.fft[0] * 0.001)
  .out();

s0.initCam(2);
src(s0)
  .scrollX(0, () => Math.sin(time * 0.05) * 0.00005)
  .scrollY([-0.2, 0, -2, 0.2, -0.2, 0, 0.2].ease('easeInOutCubic'))
  .scrollY(() => time * mouse.y * 0.00003)
  .scrollX(() => time * mouse.x * 0.00003)
  .scale(1)
  .modulate(noise(1, 0.0000000025))
  .saturate(({ time }) => Math.sin(time) * 10)
  .modulate(o0, () => mouse.x * 0.0003)
  .out();

s0.initCam(2);
src(s0)
  .scrollX(0, () => Math.sin(time * 0.05) * 0.00005)
  .scrollY([-0.02, 0.02].ease('easeInOutCubic'))
  .scrollY(() => time * mouse.y * 0.00003)
  .scrollX(() => time * mouse.x * 0.00003)
  .scale(1.05)
  .modulate(noise(1, 0.0000000025))
  .saturate(({ time }) => a.fft[0] * 10)
  .modulate(o0, () => mouse.x * 0.0003)
  .out();

s0.initCam(2);
src(s0)
  .scrollY(() => time * mouse.y * 0.000003)
  .scrollX(() => time * mouse.x * 0.000003)
  .scale(() => a.fft[0] * 8)
  .modulate(noise(1, () => a.fft[0] * 0.01))
  .saturate(({ time }) => a.fft[0] * 10)
  .modulate(o0, () => mouse.x * 0.0003)
  .scrollX(0, () => a.fft[0] * 0.001)
  .scrollY(0, () => a.fft[0] * 0.001)
  .out();

s0.initCam(2);
src(s0)
  //.scrollY(() => time * mouse.y * 0.000003)
  //.scrollX(() => time * mouse.x * 0.000003)
  //.scale(() =>a.fft[0]* 8)
  //.modulate(noise(1,() =>a.fft[0]* 0.01))
  //.saturate(({time}) => a.fft[0]*10)
  .modulate(o0, () => a.fft[0] * 0.05)
  .layer(
    shape(4, 0)
      .scale(() => a.fft[0] * 10)
      .luma(),
  )
  //.modulate(o0, () => mouse.x * 0.0003)
  //.scrollX(0, () =>a.fft[0]* 0.001)
  //.scrollY(0, () =>{
  //var plusOrMinus = Math.random() < 0.5 ? -1 : 1;

  //return (c) * plusOrMinus

  //})

  .out();

s0.initCam(2);
src(s0)
  .modulate(o0, () => a.fft[0] * 0.05)
  .layer(
    shape(4, 0)
      .scale(() => a.fft[0] * 10)
      .scrollX(() => -(mouse.x / width) * 1)
      .luma(),
  )
  .layer(
    shape(4, 0)
      .scale(() => a.fft[1] * 10)
      .scrollX(() => -(mouse.x / width) * 2)
      .luma(),
  )
  .layer(
    shape(4, 0)
      .scale(() => a.fft[2] * 10)
      .scrollX(() => -(mouse.x / width) * 3)
      .luma(),
  )
  .layer(
    shape(4, 0)
      .scale(() => a.fft[3] * 10)
      .scrollX(() => -(mouse.x / width) * 4)
      .luma(),
  )
  .layer(
    shape(4, 0)
      .scale(() => a.fft[4] * 10)
      .scrollX(() => -(mouse.x / width) * 5)
      .luma(),
  )
  .layer(
    shape(4, 0)
      .scale(() => a.fft[5] * 10)
      .scrollX(() => -(mouse.x / width) * 6)
      .luma(),
  )
  .layer(
    shape(4, 0)
      .scale(() => a.fft[6] * 10)
      .scrollX(() => -(mouse.x / width) * 7)
      .luma(),
  )
  .layer(
    shape(4, 0)
      .scale(() => a.fft[7] * 10)
      .scrollX(() => -(mouse.x / width) * 8)
      .luma(),
  )
  .out();

// draws four squares and has them change based on different fft values
s0.initCam(2);
src(s0)
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
  );

// a.fft -- list of fft values
// a.setBins() -- sets list size for fft (moar granular)
