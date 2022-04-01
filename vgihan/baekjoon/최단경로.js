const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let v, e, k;
let i = 0;
const inputs = [];

rl.on("line", function (line) {
  if (!v) {
    [v, e] = line.split(" ").map((v) => parseInt(v));
    return;
  }
  if (!k) {
    k = parseInt(line);
    return;
  }
  if (++i < e) {
    inputs.push(line.split(" ").map((v) => parseInt(v)));
    return;
  }
  inputs.push(line.split(" ").map((v) => parseInt(v)));
  console.log(solution(v, k, inputs).join("\n"));
  rl.close();
}).on("close", function () {
  process.exit();
});

const INF = Number.MAX_SAFE_INTEGER;

function solution(v, k, inputs) {
  const init = Array.from({ length: v }).map(() => ({}));
  const field = inputs.reduce((tempField, [u, v, w]) => {
    tempField[u - 1][v - 1] = w;
    return tempField;
  }, init);

  return search(k - 1, field);
}

function search(k, field) {
  const dist = Array.from({ length: v }).map((t, i) => (i === k ? 0 : INF));
  const queue = new PriorityQueue((a, b) => b.cost - a.cost);
  queue.push({ vertex: k, cost: 0 });

  while (!queue.isEmpty()) {
    const { vertex: start, cost } = queue.pop();
    Object.keys(field[start]).forEach((end) => {
      const weight = field[start][end];
      if (dist[end] <= cost + weight) return;
      dist[end] = cost + weight;
      queue.push({ vertex: end, cost: dist[end] });
    });
  }

  return dist.map((v) => (v >= INF ? "INF" : v));
}

class PriorityQueue {
  queue = Array.from({ length: 300000 }).map(() => null);
  tail = 1;
  constructor(compare = (a, b) => a - b) {
    this.compare = compare;
  }
  isEmpty() {
    return this.tail <= 1;
  }
  push(node) {
    this.queue[this.tail] = node;
    let idx = this.tail++;
    while (idx > 1) {
      if (this.compare(this.queue[idx], this.queue[Math.floor(idx / 2)]) < 0) {
        break;
      }
      [this.queue[idx], this.queue[Math.floor(idx / 2)]] = [
        this.queue[Math.floor(idx / 2)],
        this.queue[idx],
      ];
      idx = Math.floor(idx / 2);
    }
  }
  pop() {
    const result = this.queue[1];
    [this.queue[1], this.queue[this.tail - 1]] = [
      this.queue[this.tail - 1],
      this.queue[1],
    ];
    this.queue[--this.tail] = null;
    let idx = 1;
    while (idx * 2 < this.tail) {
      const isMaxLeft =
        !this.queue[idx * 2 + 1] ||
        this.compare(this.queue[idx * 2], this.queue[idx * 2 + 1]) > 0;
      const isMinParent = isMaxLeft
        ? this.compare(this.queue[idx], this.queue[idx * 2]) < 0
        : this.compare(this.queue[idx], this.queue[idx * 2 + 1]) < 0;

      if (isMaxLeft && isMinParent) {
        [this.queue[idx], this.queue[idx * 2]] = [
          this.queue[idx * 2],
          this.queue[idx],
        ];
        idx *= 2;
        continue;
      }
      if (!isMaxLeft && isMinParent) {
        [this.queue[idx], this.queue[idx * 2 + 1]] = [
          this.queue[idx * 2 + 1],
          this.queue[idx],
        ];
        idx = idx * 2 + 1;
        continue;
      }
      break;
    }
    return result;
  }
}
