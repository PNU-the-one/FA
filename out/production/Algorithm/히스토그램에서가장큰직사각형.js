const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  if (line === "0") {
    rl.close();
    return;
  }
  console.log(solution(...line.split(" ").map((v) => parseInt(v))));
}).on("close", function () {
  process.exit();
});

function solution(n, ...histogram) {
  return getMaxArea(0, n - 1, histogram);
}

function getMaxArea(start, end, histogram) {
  // console.log(start, end);
  if (start === end) return histogram[start];

  const mid = Math.floor((end + start) / 2);
  const leftMaxArea = getMaxArea(start, mid, histogram);
  const rightMaxArea = getMaxArea(mid + 1, end, histogram);

  let [low, high] = [mid, mid + 1];
  let height = Math.min(histogram[low], histogram[high]);
  let result = (high - low + 1) * height;

  while (low > start || high < end) {
    if (
      low > start &&
      (high >= end || histogram[low - 1] > histogram[high + 1])
    ) {
      height = Math.min(histogram[--low], height);
      // console.log(`height: ${height} <-`);
    } else {
      height = Math.min(histogram[++high], height);
      // console.log(`height: ${height} ->`);
    }

    result = Math.max(result, height * (high - low + 1));
  }
  // console.log(leftMaxArea, rightMaxArea, result);
  return Math.max(leftMaxArea, rightMaxArea, result);
}
