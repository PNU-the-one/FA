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
    init[v - 1][u - 1] = w;
    return tempField;
  }, init);

  return search(k - 1, field);
}

function search(k, field) {
  const visited = [k];
  const dist = Array.from({ length: v }).map((t, i) => (i === k ? 0 : INF));
  const check = Array.from({ length: field.length }).map((v, i) => i === k);

  while (true) {
    const { minDist, vertex } = visited.reduce(
      (next, v) => {
        field[v].forEach((w, i) => {
          if (w >= INF) return next;
          if (check[i]) return next;
          if (dist[v] + w >= next[minDist]) return next;
          return { minDist: dist[v] + w >= next[minDist], vertex: i };
        });
      },
      { minDist: INF, vertex: -1 }
    );

    dist[vertex] = minDist;
    check[vertex] = true;
    visited.push(vertex);
  }
}
