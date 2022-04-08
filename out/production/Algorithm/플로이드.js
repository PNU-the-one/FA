const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let i = 0;
const inputs = [];

rl.on("line", function (line) {
  if (!n) {
    n = parseInt(line);
    return;
  }
  if (!m) {
    m = parseInt(line);
    return;
  }
  if (++i < m) {
    inputs.push(line.split(" ").map((v) => parseInt(v)));
    return;
  }
  inputs.push(line.split(" ").map((v) => parseInt(v)));
  const result = solution(n, m, inputs);
  const string = result.reduce((str, arr) => {
    return str + arr.map((v) => (v >= Infinity ? 0 : v)).join(" ") + "\n";
  }, "");
  console.log(string);
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(n, m, inputs) {
  const buses = inputs.map(([a, b, c]) => [a - 1, b - 1, c]);
  const initDist = Array.from({ length: n }).map(() =>
    Array.from({ length: n }).map(() => Infinity)
  );
  const dist = buses.reduce((pre, [a, b, c]) => {
    pre[a][b] = Math.min(pre[a][b], c);
    return pre;
  }, initDist);

  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
  }

  for (let i = 0; i < n; i++) {
    for (let curNode = 0; curNode < n; curNode++) {
      if (dist[curNode][i] >= Infinity) continue;
      for (let target = 0; target < n; target++) {
        dist[curNode][target] = Math.min(
          dist[curNode][target],
          dist[curNode][i] + dist[i][target]
        );
      }
    }
  }

  return dist;
}
