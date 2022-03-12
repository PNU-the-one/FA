const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const inputs = line.split(" ").map((v) => parseInt(v));
  const gcd = getGcd(...inputs);
  const lcm = (inputs[0] * inputs[1]) / gcd;
  console.log(gcd);
  console.log(lcm);
  rl.close();
}).on("close", function () {
  process.exit();
});

function getGcd(a, b) {
  if (b === 0) return a;
  return getGcd(b, a % b);
}
