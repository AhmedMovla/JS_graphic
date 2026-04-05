console.log(graphic);
graphic.width = 800;
graphic.height = 800;
const ctx = graphic.getContext("2d");
console.log(ctx);

function clear() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, graphic.width, graphic.height);
}

function point({ x, y }) {
  const s = 10;
  ctx.fillStyle = "orange";
  ctx.fillRect(x - s / 2, y - s / 2, s, s);
}

function translate(p) {
  return {
    x: ((p.x + 1) / 2) * graphic.width,
    y: (1 - (p.y + 1) / 2) * graphic.height,
  };
}

function project({ x, y, z }) {
  return {
    x: x / z,
    y: y / z,
  };
}

function zOffset({ x, y, z }, dz) {
  return { x, y, z: z + dz };
}

function rotate_xz({ x, y, z }, angle) {
  const s = Math.sin(angle);
  const c = Math.cos(angle);
  return {
    x: x * c - z * s,
    y,
    z: x * s + z * c,
  };
}
function rotate_yz({ x, y, z }, angle) {
  const s = Math.sin(angle);
  const c = Math.cos(angle);
  return {
    x,
    y: y * c - z * s,
    z: y * s + z * c,
  };
}
function line(p1, p2) {
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.strokeStyle = "orange";
  ctx.lineWidth = 3;
  ctx.stroke();
}
//cube
// const vs = [
//   { x: 0.25, y: 0.25, z: 0.25 },
//   { x: -0.25, y: 0.25, z: 0.25 },
//   { x: -0.25, y: -0.25, z: 0.25 },
//   { x: 0.25, y: -0.25, z: 0.25 },

//   { x: 0.25, y: 0.25, z: -0.25 },
//   { x: -0.25, y: 0.25, z: -0.25 },
//   { x: -0.25, y: -0.25, z: -0.25 },
//   { x: 0.25, y: -0.25, z: -0.25 },
// ];

// const fs = [
//   [0, 1, 2, 3],
//   [4, 5, 6, 7],
//   [0, 4],
//   [1, 5],
//   [2, 6],
//   [3, 7],
// ];

//pyramid
const vs = [
  { x: 0.25, y: -0.25, z: 0.25 },
  { x: -0.25, y: -0.25, z: 0.25 },
  { x: -0.25, y: -0.25, z: -0.25 },
  { x: 0.25, y: -0.25, z: -0.25 },

  { x: 0.0, y: 0.25, z: 0.0 },
];
const fs = [
  [0, 1, 2, 3],
  [0, 4],
  [1, 4],
  [2, 4],
  [3, 4],
];

const FPS = 60;
let dz = 1;
let angle = 0;
function frame() {
  const dt = 1 / FPS;
  //   dz += 1 * dt;
  angle += Math.PI * dt;
  clear();
  //   for (const v of vs) {
  //     point(translate(project(zOffset(rotate_xz(v, angle), dz))));
  //   }
  for (const f of fs) {
    for (let i = 0; i < f.length; i++) {
      const a = vs[f[i]];
      const b = vs[f[(i + 1) % f.length]];
      line(
        translate(project(zOffset(rotate_xz(rotate_yz(a, angle),angle*0.5), dz))),
        translate(project(zOffset(rotate_xz(rotate_yz(b, angle),angle*0.5), dz))),
      );
    }
  }
  setTimeout(frame, 1000 / FPS);
}
setTimeout(frame, 1000 / FPS);
