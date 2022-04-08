const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  console.log(parseInt(pow(...line.split(" ").map((v) => BigInt(v)))));
  rl.close();
}).on("close", function () {
  process.exit();
});

const pow = (a, b, c) => {
  if (b === 0n) return 1;
  if (b === 1n) return a % c;
  const half = pow(a, BigInt(b / BigInt(2)), c);
  if (BigInt(b) % 2n === 0n) return (half * half) % c;
  return (half * half * a) % c;
};
