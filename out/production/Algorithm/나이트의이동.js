const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let i = 0;
const inputs = [];

rl.on("line", function (line) {
  if (!n) {
    n = parseInt(line);
    return;
  }
  if (++i < n * 3) {
    inputs.push(line.split(" ").map((v) => parseInt(v)));
    return;
  }
  inputs.push(line.split(" ").map((v) => parseInt(v)));
  console.log(solution(inputs));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(inputs) {
  const result = [];
  while (inputs.length > 0) {
    result.push(bfs(inputs.splice(0, 3)));
  }
  return result.join("\n");
}

function bfs([l, [sx, sy], [ex, ey]]) {
  const queue = new Queue();
  const visited = Array.from({ length: l }).map(() =>
    Array.from({ length: l }).map(() => false)
  );
  const d = [
    { dx: 1, dy: 2 },
    { dx: 2, dy: 1 },
    { dx: 2, dy: -1 },
    { dx: 1, dy: -2 },
    { dx: -1, dy: -2 },
    { dx: -2, dy: -1 },
    { dx: -2, dy: 1 },
    { dx: -1, dy: 2 },
  ];
  queue.push({ x: sx, y: sy, dist: 0 });
  visited[sx][sy] = true;
  while (!queue.isEmpty()) {
    const curNode = queue.pop();
    const { x, y, dist } = curNode;
    if (x === ex && y === ey) return dist;
    d.forEach(({ dx, dy }) => {
      const [nextX, nextY] = [x + dx, y + dy];
      if (nextX < 0 || nextX >= l) return;
      if (nextY < 0 || nextY >= l) return;
      if (visited[nextX][nextY]) return;
      visited[nextX][nextY] = true;
      queue.push({ x: nextX, y: nextY, dist: dist + 1 });
    });
  }
}

class Queue {
  queue = Array.from({ length: 90000 }).map(() => null);
  head = 0;
  tail = 0;
  push(value) {
    this.queue[this.head++] = value;
  }
  pop() {
    const result = this.queue[this.tail];
    this.queue[this.tail++] = null;
    return result;
  }
  isEmpty() {
    return this.head === this.tail;
  }
}
