const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  console.log(solution(...line.split(" ").map((v) => parseInt(v))));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(n, k) {
  const MOD = 1000000000;
  const dp = Array.from({ length: n }).map(() => Array(k).fill(1));

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < k; j++) {
      dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD;
    }
  }

  return dp[n - 1].reduce((sum, v) => (sum + v) % MOD, 0);
}
