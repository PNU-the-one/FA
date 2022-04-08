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
  if (++i < n) {
    inputs.push(parseInt(line));
    return;
  }
  console.log([...inputs, parseInt(line)].sort((a, b) => a - b).join("\n"));
  rl.close();
}).on("close", function () {
  process.exit();
});
