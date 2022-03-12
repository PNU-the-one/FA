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
  console.log(solution(inputs));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(inputs) {
  return inputs
    .reduce((stack, num) => {
      if (!num) {
        if (stack.length > 0) stack.pop();
        return stack;
      }
      stack.push(num);
      return stack;
    }, [])
    .reduce((sum, num) => {
      return sum + num;
    }, 0);
}
