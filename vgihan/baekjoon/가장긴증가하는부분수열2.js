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
  console.log(solution(line.split(" ").map((v) => parseInt(v))));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(inputs) {
  return inputs.reduce((memo, input) => {
    if (!memo) return [input];
    const max = memo[memo.length - 1];
    if (input > max) return [...memo, input];
    return search(0, memo.length - 1, memo, input);
  }, null).length;
}

function search(start, end, arr, target) {
  const mid = Math.ceil((start + end) / 2);

  const isFind = arr[mid - 1] < target && arr[mid + 1] > target;
  const isFirst = mid <= 0;
  const isLast = mid >= arr.length - 1;

  if (start >= end) return createArray(arr, mid, Math.min(target, arr[mid]));
  if (arr[mid] === target) return [...arr];
  if (isFind || isFirst || isLast) {
    return createArray(arr, mid, Math.min(target, arr[mid]));
  }

  if (arr[mid - 1] > target) return search(start, mid - 1, arr, target);
  else return search(mid, end, arr, target);
}

function createArray(arr, idx, value) {
  const copy = [...arr];
  copy[idx] = value;
  return copy;
}
