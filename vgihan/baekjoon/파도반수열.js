function solution(n) {
  const dp = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];
  for (let i = 11; i <= n; i++) {
    dp.push(dp[i - 1] + dp[i - 5]);
  }
  return dp[n];
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let i;

rl.on("line", function (line) {
  if (!i) {
    i = parseInt(line);
    return;
  }
  console.log(solution(parseInt(line)));
  if (i-- <= 1) rl.close();
}).on("close", function () {
  process.exit();
});
