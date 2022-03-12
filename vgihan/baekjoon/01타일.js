function solution(n) {
  const dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp.push(((dp[i - 1] % 15746) + (dp[i - 2] % 15746)) % 15746);
  }
  return dp[n];
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  console.log(solution(parseInt(line)));
  rl.close();
}).on("close", function () {
  process.exit();
});
