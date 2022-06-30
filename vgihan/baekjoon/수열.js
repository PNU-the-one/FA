const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, k;
let inputs;

rl.on("line", function (line) {
  if (!n) {
    [n, k] = line.split(" ").map((v) => parseInt(v));
    return;
  }
  console.log(
    solution(
      k,
      line.split(" ").map((v) => parseInt(v))
    )
  );
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(k, inputs) {
  let sum = 0;
  const sums = [0, ...inputs].map((v) => {
    return (sum += v);
  });

  return sums.reduce((max, s, i) => {
    const cur = s - sums[i - k];
    if (max < cur) return cur;
    return max;
  }, -Infinity);
}
