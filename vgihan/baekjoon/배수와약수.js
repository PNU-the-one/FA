const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  if (line !== "0 0") {
    console.log(solution(line.split(" ").map((v) => parseInt(v))));
    return;
  }
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(inputs) {
  return inputs[0] > inputs[1]
    ? inputs[0] % inputs[1] === 0
      ? "multiple"
      : "neither"
    : inputs[1] % inputs[0] === 0
    ? "factor"
    : "neither";
}
