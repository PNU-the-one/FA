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
  console.log(solution(n, parseInt(line)));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(n, k) {
  return search(1, n * n, n, k);
}

function search(start, end, n, k) {
  const mid = Math.floor((start + end) / 2);
  const smaller = check(mid, n);

  if (start >= end) return mid;
  if (smaller < k) return search(mid + 1, end, n, k);
  return search(start, mid, n, k);
}

function check(target, n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count += Math.min(n, parseInt(target / i));
  }
  return count;
}
