const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let A, X;

rl.on("line", function (line) {
  if (!n) {
    n = parseInt(line);
    return;
  }
  if (!A) {
    A = line.split(" ").map((v) => parseInt(v));
    return;
  }
  if (!m) {
    m = parseInt(line);
    return;
  }
  X = line.split(" ").map((v) => parseInt(v));
  console.log(solution(A, X).join("\n"));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(A, X) {
  const sorted = A.sort((a, b) => a - b);
  const targets = [...X];
  const length = sorted.length;

  return targets.map((target) => search(sorted, target, 0, length - 1));
}

function search(sorted, target, start, end) {
  const mid = Math.floor((start + end) / 2);

  if (start > end) return 0;
  if (sorted[mid] > target) return search(sorted, target, start, mid - 1);
  if (sorted[mid] < target) return search(sorted, target, mid + 1, end);
  if (sorted[mid] === target) return 1;
}
