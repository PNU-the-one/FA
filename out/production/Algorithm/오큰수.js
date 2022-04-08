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
  const stack = [0];
  const result = [...inputs];

  for (let i = 1; i < inputs.length; i++) {
    const target = result[i];
    let peek = result[stack[stack.length - 1]];

    while (peek < target && stack.length > 0) {
      const idx = stack.pop();
      result[idx] = target;
      peek = result[stack[stack.length - 1]];
    }

    stack.push(i);
  }

  return result
    .map((v, i) => (v === inputs[i] ? -1 : v))
    .map((v) => v.toString());
}
