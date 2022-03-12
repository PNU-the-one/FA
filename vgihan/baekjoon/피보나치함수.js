const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const length = input.shift();

for (let i = 0; i < length; i++) {
  console.log(solution(parseInt(input[i])).join(" "));
}

function solution(n) {
  const arr = [
    [1, 0],
    [0, 1],
  ];
  for (let i = 2; i <= n; i++) {
    const first = arr[i - 2][0] + arr[i - 1][0];
    const second = arr[i - 2][1] + arr[i - 1][1];
    arr.push([first, second]);
  }
  return arr[n];
}
