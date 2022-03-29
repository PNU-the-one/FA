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
  console.log(solution(v, k, inputs));
  rl.close();
}).on("close", function () {
  process.exit();
});

const INF = Number.MAX_SAFE_INTEGER;

function solution(v, k, inputs) {
  const init = Array.from({ length: v }).map(() =>
    Array.from({ length: v }).map(() => INF)
  );
  const field = inputs.reduce((tempField, [u, v, w]) => {
    init[u - 1][v - 1] = w;
    return tempField;
  }, init);

  return search(k - 1, field);
}

function search(k, field) {
  const visited = [k];
  const dist = Array.from({ length: v }).map((t, i) => (i === k ? 0 : INF));
  const check = Array.from({ length: field.length }).map((v, i) => i === k);
  const queue = new PriorityQueue();
  while (true) {}
}

class PriorityQueue {
  queue = Array.from({ length: 300001 }).map(() => null);
  tail = 1;
  constructor(compare) {
    this.compare = compare;
  }
  push(node) {
    this.queue[tail] = node;
    let idx = this.tail++;
    while (idx >= 1) {
      if (this.compare(this.queue[idx], this.queue[Math.floor(idx / 2)]) < 0) {
        break;
      }
      [this.queue[idx], this.queue[Math.floor(idx / 2)]] = [
        [this.queue[Math.floor(idx / 2)], this.queue[idx]],
      ];
      idx = Math.floor(idx / 2);
    }
  }
  pop() {
    const result = this.queue[1];
    [this.queue[1], this.queue[this.tail - 1]] = [
      this.queue[--this.tail],
      this.queue[1],
    ];
    this.queue[this.tail] = null;
    let idx = 1;
    while (idx < this.tail - 1) {
      if (this.compare(this.queue[idx * 2], this.queue[idx * 2 + 1]) < 0) {
        if (this.compare(this.queue[idx], this.queue[idx * 2]) < 0) break;
        [this.queue[idx], this.queue[idx * 2]] = [
          this.queue[idx * 2],
          this.queue[idx],
        ];
        idx *= 2;
      } else {
        if (this.compare(this.queue[idx], this.queue[idx * 2 + 1]) < 0) break;
        [this.queue[idx], this.queue[idx * 2 + 1]] = [
          this.queue[idx * 2 + 1],
          this.queue[idx],
        ];
        idx = idx * 2 + 1;
      }
    }
    return result;
  }
}
