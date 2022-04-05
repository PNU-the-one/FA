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
  console.log(solution(n, m, inputs).join("\n"));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(n, m, inputs) {
  const initField = Array.from({ length: n }).map(() => ({}));
  const field = inputs.reduce((pre, [a, b, c]) => {
    pre[a - 1][b - 1] = c;
    return pre;
  }, initField);
  return search(field);
}

function search(field) {}
