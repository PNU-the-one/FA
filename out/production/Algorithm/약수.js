const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;

rl.on("line", function (line) {
  if (!n) {
    n = line;
    return;
  }
  console.log(solution(line.split(" ").map((v) => parseInt(v))));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(inputs) {
  return Math.min(...inputs) * Math.max(...inputs);
}
