const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;

rl.on("line", (line) => {
  if (!n) {
    n = parseInt(line);
    return;
  }
  console.log(
    solution(
      line.split(" ").map((v) => parseInt(v)),
      n
    )
  );
  rl.close();
}).on("close", () => {
  process.exit();
});

function solution(inputs, n) {
  const sorted = inputs.sort((a, b) => a - b);
  return sorted.reduce((sum, p, i) => sum + p * (n - i), 0);
}
