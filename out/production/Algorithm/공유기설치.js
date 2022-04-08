const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, c;
let i = 0;
let inputs = [];

rl.on("line", function (line) {
  if (!n) {
    [n, c] = line.split(" ").map((v) => parseInt(v));
    return;
  }
  if (++i < n) {
    inputs.push(parseInt(line));
    return;
  }
  inputs.push(parseInt(line));
  console.log(solution([...inputs.sort((a, b) => a - b)], c));
  rl.close();
}).on("close", function () {
  process.exit();
});

const MAX_LENGTH = 1_000_000_000;

function solution(inputs, c) {
  return search(1, MAX_LENGTH, inputs, c);
}

function search(start, end, homes, c) {
  const mid = Math.ceil((start + end) / 2);
  const count = check(homes, mid);

  if (start >= end) return mid;
  if (count < c) return search(start, mid - 1, homes, c);
  return search(mid, end, homes, c);
}

function check(homes, minLength) {
  return homes.reduce(
    (info, home) => {
      const { curHome, count } = info;
      if (home - curHome < minLength) return info;
      return { curHome: home, count: count + 1 };
    },
    { curHome: homes[0], count: 1 }
  ).count;
}
