const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, k;
let i = 0;
let cables = [];

rl.on("line", function (line) {
  if (!n) {
    [n, k] = line.split(" ").map((v) => parseInt(v));
    return;
  }
  if (++i < n) {
    cables.push(parseInt(line));
    return;
  }
  cables.push(parseInt(line));
  console.log(solution(cables, k));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(cables, k) {
  const maxLength = Math.max(...cables);
  return search(1, maxLength, cables, k);
}

function search(start, end, cables, k) {
  const mid = Math.ceil((start + end) / 2);
  const numOfUnitCable = getNumOfCable(mid, cables);

  if (start === end) return mid;
  if (numOfUnitCable < k) return search(start, mid - 1, cables, k);

  return search(mid, end, cables, k);
}

function getNumOfCable(unitLength, cables) {
  return cables.reduce((num, cableLength) => {
    return num + Math.floor(cableLength / unitLength);
  }, 0);
}
