const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;

rl.on("line", function (line) {
  if (!n) {
    n = parseInt(line);
    return;
  }
  console.log(solution(line.split(" ").map((v) => parseInt(v))).join(" "));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(inputs) {
  const liquids = [...inputs.sort((a, b) => a - b)];
  let i = 0;
  let j = liquids.length - 1;
  let min = 10000000000;
  let result;

  while (i < j) {
    if (liquids[i] >= 0) j = i + 1;
    const sum = liquids[i] + liquids[j];
    if (Math.abs(sum) <= Math.abs(min)) {
      result = [liquids[i], liquids[j]];
      min = Math.abs(sum);
    }
    if (sum <= 0) {
      i++;
      continue;
    }
    if (sum > 0) {
      j--;
      continue;
    }
  }

  return result;
}
