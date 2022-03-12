function solution(triangle, n) {
  const dp = Array.from({ length: n }).map((v) => []);
  dp[n - 1] = triangle[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[i].push(triangle[i][j] + Math.max(dp[i + 1][j], dp[i + 1][j + 1]));
    }
  }
  return dp[0][0];
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let i;
let n;
const triangle = [];

rl.on("line", function (line) {
  if (!i) {
    i = parseInt(line);
    n = i;
    return;
  }
  triangle.push(
    line
      .trim()
      .split(" ")
      .map((v) => parseInt(v))
  );
  if (i-- <= 1) {
    console.log(solution(triangle, n));
    rl.close();
  }
}).on("close", function () {
  process.exit();
});
