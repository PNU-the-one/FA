const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t;
let n, m, k;
let i = 0;
let inputs = [];

rl.on("line", function (line) {
  if (!t) {
    t = parseInt(line);
    return;
  }
  if (!n) {
    [n, m, k] = line.split(" ").map((v) => parseInt(v));
    return;
  }
  if (++i < k) {
    inputs.push(line.split(" ").map((v) => parseInt(v)));
    return;
  }
  inputs.push(line.split(" ").map((v) => parseInt(v)));
  console.log(solution(n, m, k, inputs));
  [n, m, k, i, inputs] = [null, null, null, 0, []];
  if (--t <= 0) {
    rl.close();
  }
}).on("close", function () {
  process.exit();
});

function solution(n, m, k, inputs) {}
