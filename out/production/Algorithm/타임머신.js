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
    [n, m] = line.split(" ").map((v) => parseInt(v));
    return;
  }
  if (++i < m) {
    inputs.push(line.split(" ").map((v) => parseInt(v)));
    return;
  }
  inputs.push(line.split(" ").map((v) => parseInt(v)));
  console.log(
    solution(
      n,
      m,
      inputs.map(([a, b, c]) => [a - 1, b - 1, c])
    ).join("\n")
  );
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(n, m, edges) {
  let dist = Array.from({ length: n }).map(() => Infinity);
  dist[0] = 0;

  for (let i = 0; i < n - 1; i++) {
    const nextDist = edges.reduce(
      (curDist, [a, b, c]) => {
        if (dist[b] > dist[a] + c) {
          curDist[b] = dist[a] + c;
        }
        return curDist;
      },
      [...dist]
    );
    dist = [...nextDist];
  }
  const isExistInfinity = edges.reduce((isExist, [a, b, c]) => {
    if (dist[b] > dist[a] + c) return true;
    return isExist;
  }, false);

  if (isExistInfinity) dist = [0, -1];

  return dist.slice(1, dist.length).map((v) => (v === Infinity ? -1 : v));
}
