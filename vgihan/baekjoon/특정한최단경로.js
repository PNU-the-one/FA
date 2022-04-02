const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, e, v1, v2;
const inputs = [];
let i = 0;

rl.on("line", function (line) {
  if (!n) {
    [n, e] = line.split(" ").map((v) => parseInt(v));
    return;
  }
  if (i++ < e) {
    inputs.push(line.split(" ").map((v) => parseInt(v)));
    return;
  }
  [v1, v2] = line.split(" ").map((v) => parseInt(v));
  const result = solution(n, e, [v1, v2], inputs);
  console.log(result >= Infinity ? -1 : result);
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(n, e, [v1, v2], inputs) {
  const init = Array.from({ length: n }).map(() => ({}));
  const field = inputs.reduce((pre, [start, end, weight]) => {
    pre[start - 1][end - 1] = weight;
    pre[end - 1][start - 1] = weight;
    return pre;
  }, init);
  const startToV1 = search(field, 0, v1 - 1);
  const startToV2 = search(field, 0, v2 - 1);
  const v1Tov2 = search(field, v1 - 1, v2 - 1);
  const v2Tov1 = search(field, v2 - 1, v1 - 1);
  const v1ToEnd = search(field, v1 - 1, n - 1);
  const v2ToEnd = search(field, v2 - 1, n - 1);
  if (v1 === 1 && v2 === n) return v1Tov2;
  if (v1 === n && v2 === 1) return v2Tov1;
  if (v1 === 1) return v1Tov2 + v2ToEnd;
  if (v2 === n) return startToV1 + v1ToEnd;
  if (v1 === n) return startToV2 + v2ToEnd;
  if (v2 === 1) return v2Tov1 + v1ToEnd;

  return Math.min(startToV1 + v1Tov2 + v2ToEnd, startToV2 + v2Tov1 + v1ToEnd);
}

function search(field, start, end) {
  const queue = new PriorityQueue((a, b) => b.cost - a.cost);
  const dist = Array.from({ length: field.length }).map(() => Infinity);
  queue.push({ vertex: start, cost: 0 });
  dist[start] = Infinity;

  while (!queue.isEmpty()) {
    const { vertex: curNode, cost } = queue.pop();
    Object.keys(field[curNode]).forEach((nextNode) => {
      const weight = field[curNode][nextNode];
      if (dist[nextNode] <= cost + weight) return;
      queue.push({ vertex: nextNode, cost: cost + weight });
      dist[nextNode] = cost + weight;
    });
  }

  return dist[end];
}

class PriorityQueue {
  queue = Array.from({ length: 800 }).map(() => null);
  tail = 1;
  constructor(compare) {
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
