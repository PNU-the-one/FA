const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  console.log(parseInt(Combination(...line.split(" ").map((v) => BigInt(v)))));
  rl.close();
}).on("close", function () {
  process.exit();
});

const MOD = 1000000007n;

function Combination(n, k) {
  console.log(Permutation(n, k), Permutation(k, k));
  return (Permutation(n, k) / Permutation(k, k)) % MOD;
}

function Permutation(n, k) {
  if (k === 0n) return 1n;
  if (k === 1n) return n;
  const leftResult = Permutation(n, BigInt(k / 2n));
  const rightResult = Permutation(n - BigInt(k / 2n), k - BigInt(k / 2n));
  return leftResult * rightResult;
}
