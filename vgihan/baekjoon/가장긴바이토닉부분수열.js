const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let inputs;

rl.on("line", function (line) {
  if (!n) {
    n = parseInt(line);
    return;
  }
  inputs = line.split(" ").map((v) => parseInt(v));
  console.log(solution(inputs));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(inputs) {
  const arr = {
    forward: [...inputs],
    reverse: [...inputs].reverse(),
  };
  const n = inputs.length;
  const getLisTable = (array) => {
    const dp = Array.from({ length: array.length }).map((v) => 1);

    for (let i = 1; i < dp.length; i++) {
      for (let j = 0; j < i; j++) {
        if (array[i] > array[j] && dp[i] <= dp[j]) {
          dp[i] = dp[j] + 1;
        }
      }
    }

    return dp;
  };
  const result = {
    forward: getLisTable(arr.forward),
    reverse: getLisTable(arr.reverse),
  };

  return Math.max(
    ...Array.from({ length: result.forward.length }).map(
      (v, i) => result.forward[i] + result.reverse[n - i - 1] - 1
    )
  );
}
