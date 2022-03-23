const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let m, n, h;
let i = 0;
let field;

rl.on("line", function (line) {
  if (!m) {
    [m, n, h] = line.split(" ").map((v) => parseInt(v));
    field = Array.from({ length: h }).map(() => []);
    return;
  }
  if (++i < n * h) {
    field[Math.floor((i - 1) / n)].push(
      line.split(" ").map((v) => parseInt(v))
    );
    return;
  }
  field[Math.floor((i - 1) / n)].push(line.split(" ").map((v) => parseInt(v)));
  console.log(solution(field));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(field) {
  const d = [
    { dx: 0, dy: 1, dz: 0 },
    { dx: 0, dy: -1, dz: 0 },
    { dx: 1, dy: 0, dz: 0 },
    { dx: -1, dy: 0, dz: 0 },
    { dx: 0, dy: 0, dz: 1 },
    { dx: 0, dy: 0, dz: -1 },
  ];
  const queue = field.reduce((q, floor, z) => {
    floor.forEach((line, y) => {
      line.forEach((tomato, x) => {
        if (tomato !== 1) return;
        q.push({ x, y, z, day: 0 });
      });
    });
    return q;
  }, new Queue());

  let lastDay = 0;

  while (!queue.isEmpty()) {
    const { x, y, z, day } = queue.pop();
    lastDay = day;
    d.forEach(({ dx, dy, dz }) => {
      const [curX, curY, curZ] = [x + dx, y + dy, z + dz];

      if (curX < 0 || curX >= m) return;
      if (curY < 0 || curY >= n) return;
      if (curZ < 0 || curZ >= h) return;
      if (field[curZ][curY][curX]) return;

      field[curZ][curY][curX] = 1;
      queue.push({ x: curX, y: curY, z: curZ, day: day + 1 });
    });
  }

  return field.reduce((isAllRipe, floor) => {
    floor.forEach((line) => {
      line.forEach((tomato) => {
        if (tomato === 0) isAllRipe = false;
      });
    });
    return isAllRipe;
  }, true)
    ? lastDay
    : -1;
}

class Queue {
  queue = Array.from({ length: 1000000 }).map(() => null);
  head = 0;
  tail = 0;
  push(value) {
    this.queue[this.head++] = value;
  }
  pop() {
    const result = this.queue[this.tail++];
    this.queue[this.tail - 1] = null;
    return result;
  }
  isEmpty() {
    return this.head === this.tail;
  }
}
