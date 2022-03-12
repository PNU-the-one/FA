const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let k;
let i = 0;
const inputs = [];

rl.on("line", function (line) {
  if (!n) {
    [n, k] = line.split(" ").map((v) => parseInt(v));
    return;
  }
  if (++i < n) {
    inputs.push(parseInt(line));
    return;
  }
  inputs.push(parseInt(line));
  console.log(solution(inputs, k));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(coins, k) {
  const candidates = coins.filter((coin) => coin <= k).reverse();
  return candidates.reduce(
    (result, coin) => {
      const { count, divide } = result;
      const quotient = Math.floor(divide / coin);
      const remain = divide % coin;
      return { count: count + quotient, divide: remain };
    },
    { count: 0, divide: k }
  ).count;
}
