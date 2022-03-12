const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  console.log(solution(line));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(inputs) {
  if (!inputs.includes("-")) {
    return inputs.split("+").reduce((sum, v) => sum + parseInt(v), 0);
  }
  const sums = inputs.split("-").map((str) => {
    if (!str) return null;
    return str.split("+").reduce((sum, number) => {
      return sum + parseInt(number);
    }, 0);
  });
  const allSum = sums.reduce((sum, v) => {
    return sum + v;
  }, 0);

  return sums[0] ? 2 * sums[0] - allSum : -allSum;
}
