const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let i = 0;
let n, m;
let inputs;
const ranges = [];

rl.on("line", function (line) {
  if (i === 0) {
    [n, m] = line.split(" ").map((v) => parseInt(v));
    i++;
    return;
  }
  if (i === 1) {
    inputs = line.split(" ").map((v) => parseInt(v));
    i++;
    return;
  }
  if (i < m + 1) {
    ranges.push(line.split(" ").map((v) => parseInt(v)));
    i++;
    return;
  }
  ranges.push(line.split(" ").map((v) => parseInt(v)));
  console.log(solution(inputs, ranges).join("\n"));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(inputs, ranges) {
  let sum = 0;
  const sums = inputs.map((v, i) => {
    sum += v;
    return sum;
  });
  sums.splice(0, 0, 0);
  return ranges.map(([start, end]) => sums[end] - sums[start - 1]);
}
