const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let i = 0;

rl.on("line", function (line) {
  if (!n) {
    n = parseInt(line);
    return;
  }
  if (i++ < n - 1) {
    console.log(solution(line.split("")));
    return;
  }
  console.log(solution(line.split("")));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(inputs) {
  const stack = [];
  const isVPS = inputs.reduce((result, input) => {
    if (!result) return false;
    if (input === "(") {
      stack.push("(");
      return true;
    }
    if (input === ")") {
      if (stack.length <= 0) return false;
      stack.pop();
      return true;
    }
    return result;
  }, true);
  return stack.length === 0 && isVPS ? "YES" : "NO";
}
