const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;

rl.on("line", function (line) {
  if (!n) {
    [n, m] = line.split(" ").map((v) => parseInt(v));
    return;
  }
  console.log(
    solution(
      line.split(" ").map((v) => parseInt(v)),
      m
    )
  );
  rl.close();
}).on("close", function () {
  process.exit();
});

const MAX_LENGTH = 2_000_000_000;

function solution(trees, m) {
  return search(0, MAX_LENGTH, trees, m);
}

function cutAllTrees(trees, height) {
  return trees.reduce((result, tree) => {
    return result + (tree > height ? tree - height : 0);
  }, 0);
}

function search(start, end, trees, m) {
  const mid = Math.ceil((start + end) / 2);
  const curGetTree = cutAllTrees(trees, mid);

  if (start >= end) return mid;
  if (curGetTree < m) return search(start, mid - 1, trees, m);

  return search(mid, end, trees, m);
}
