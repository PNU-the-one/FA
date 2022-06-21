const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t;
let i = 0;
const inputs = [];
let result = "";

rl.on("line", function (line) {
  if (!t) {
    t = parseInt(line);
    return;
  }
  if (i++ < t * 2 - 1) {
    inputs.push(line);
    return;
  }
  inputs.push(line);
  for (let j = 0; j < t; j++) {
    result += solution(inputs[j * 2 + 1]) + "\n";
  }
  console.log(result);
}).on("close", function () {
  process.exit();
});

function solution(inputs) {
  const fileSizes = inputs.split(" ").map((v) => parseInt(v));
  const dp = Array.from({ length: fileSizes.length }).map(() => Array(fileSizes.length).fill(Infinity));
  for (let i = 0; i < fileSizes.length; i++) {
    dp[i][i] = fileSizes[i];
  }
  for (let i = 2; i < fileSizes.length; i++) {
    for (let j = 0; j < fileSizes.length - i; j++) {
      dp[j][i + j] = Math.min();
    }
  }
}

function sum(inputs, start, end) {}
