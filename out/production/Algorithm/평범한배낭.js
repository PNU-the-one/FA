const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, k;
let i = 0;
const elements = [];

rl.on("line", function (line) {
  if (!n) {
    [n, k] = line.split(" ").map((v) => parseInt(v));
    return;
  }
  if (++i < n) {
    elements.push(line.split(" ").map((v) => parseInt(v)));
    return;
  }
  elements.push(line.split(" ").map((v) => parseInt(v)));
  console.log(solution(elements, n, k));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(elements, n, k) {
  const dp = Array.from({ length: n + 1 }).map(() =>
    Array.from({ length: k + 1 }).map(() => 0)
  );
  for (let i = 1; i <= n; i++) {
    const [w, v] = elements[i - 1];
    for (let j = 1; j <= k; j++) {
      if (w > j) {
        dp[i][j] = dp[i - 1][j];
        continue;
      }
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w] + v);
    }
  }
  return dp[n][k];
}
