const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let i = 0;
const inputs = [];

rl.on("line", function (line) {
  if (!n) {
    n = parseInt(line);
    return;
  }
  if (i++ < n - 1) {
    inputs.push(parseInt(line));
    return;
  }
  inputs.push(parseInt(line));
  console.log(solution(inputs).join("\n"));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(inputs) {
  const sorted = [...inputs].sort((a, b) => a - b);
  const cmds = [];
  const stack = [];
  let i = 0;
  let j = 0;
  while (i < inputs.length) {
    const curTarget = inputs[i];
    const curNode = sorted[j];

    if (stack.length === 0) {
      stack.push(curNode);
      cmds.push("+");
      j++;
      continue;
    }
    if (curTarget <= stack[stack.length - 1]) {
      if (curTarget === stack[stack.length - 1]) i++;
      stack.pop();
      cmds.push("-");
      continue;
    }
    if (curNode <= curTarget) {
      stack.push(curNode);
      cmds.push("+");
      j++;
      continue;
    }

    return ["NO"];
  }
  return cmds;
}
