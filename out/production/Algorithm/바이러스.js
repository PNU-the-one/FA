const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, k;
let i = 0;
const inputs = [];

rl.on("line", function (line) {
  if (!n) {
    n = parseInt(line);
    return;
  }
  if (!k) {
    k = parseInt(line);
    return;
  }
  if (++i < k) {
    inputs.push(line.split(" ").map((v) => parseInt(v)));
    return;
  }
  inputs.push(line.split(" ").map((v) => parseInt(v)));
  console.log(solution(n, inputs));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(n, inputs) {
  const dist = Array.from({ length: n }).map(() =>
    Array.from({ length: n }).map((v) => false)
  );
  const visited = Array.from({ length: n }).map(() => false);
  inputs.forEach((input) => {
    dist[input[0] - 1][input[1] - 1] = true;
    dist[input[1] - 1][input[0] - 1] = true;
  });
  return dfs(dist, 0, visited) - 1;
}

function dfs(dist, curNode, visited) {
  visited[curNode] = true;
  const result = dist[curNode].reduce((sum, nextNode, i) => {
    if (visited[i]) return sum;
    if (nextNode) return sum + dfs(dist, i, visited);
    return sum;
  }, 0);
  return result + 1;
}
