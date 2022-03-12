const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let firstInput;

rl.on("line", function (line) {
  if (!firstInput) {
    firstInput = line;
    return;
  }
  console.log(solution(firstInput, line));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(a, b) {
  const dp = Array.from({ length: a.length + 1 }).map(() =>
    Array.from({ length: b.length + 1 }).map(() => 0)
  );
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        continue;
      }
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[a.length][b.length];
}
