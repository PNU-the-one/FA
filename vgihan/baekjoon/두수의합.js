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
  if (!inputs) {
    inputs = line.split(" ").map((v) => parseInt(v));
    return;
  }
  console.log(solution(parseInt(line), inputs));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(x, inputs) {
  const arr = inputs.sort((a, b) => a - b);
  let i = 0;
  let j = arr.length - 1;
  let count = 0;

  while (i < j) {
    const sum = arr[i] + arr[j];
    if (sum > x) {
      j--;
      continue;
    }
    if (sum < x) {
      i++;
      continue;
    }
    count++;
    i++;
    j--;
  }

  return count;
}
