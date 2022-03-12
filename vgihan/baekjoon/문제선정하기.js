// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", function (line) {
  input.push(line);
  solution(input);
}).on("close", function () {
  process.exit();
});

function solution(input) {
  if (input.length < 2) return;

  const difficulty = input[1].split(" ").map((v) => parseInt(v));
  const result = difficulty.reduce((set, diff) => {
    set.add(diff);
    return set;
  }, new Set());

  if (result.size < 3) console.log("NO");
  else console.log("YES");
}
