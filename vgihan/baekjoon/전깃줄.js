const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let i = 0;
const inputs = [];

rl.on("line", function (line) {
  if (!n) {
    n = parseInt(line);
    return;
  }
  if (++i < n) {
    inputs.push(line.split(" ").map((v) => parseInt(v)));
    return;
  }
  inputs.push(line.split(" ").map((v) => parseInt(v)));
  console.log(solution(inputs));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(inputs) {
  const rightElements = inputs.sort((a, b) => a[0] - b[0]).map((el) => el[1]);
  const dp = Array.from({ length: rightElements.length }).map((v) => 1);

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      if (rightElements[i] > rightElements[j] && dp[i] <= dp[j]) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  return inputs.length - Math.max(...dp);
}
