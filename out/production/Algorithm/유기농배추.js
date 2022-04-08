const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t;
let testIdx = 0;
let m, n, k;
let kIdx = 0;
let inputs = [];
const results = [];

rl.on("line", function (line) {
  if (!t) {
    t = parseInt(line);
    return;
  }
  if (!m) {
    [m, n, k] = line.split(" ").map((v) => parseInt(v));
    return;
  }
  if (++kIdx < k) {
    inputs.push(line.split(" ").map((v) => parseInt(v)));
    return;
  }
  inputs.push(line.split(" ").map((v) => parseInt(v)));
  solution(m, n, inputs);
  testIdx++;
  [m, n, k] = [null, null, null];
  inputs = [];
  if (testIdx >= t) {
    console.log(results.join("\n"));
    rl.close();
    return;
  }
}).on("close", function () {
  process.exit();
});

function solution(m, n, inputs) {
  const initField = Array.from({ length: m }).map(() =>
    Array.from({ length: n }).map(() => 0)
  );
  const field = inputs.reduce((result, [x, y]) => {
    result[x][y] = 1;
    return result;
  }, initField);
  const visited = Array.from({ length: m }).map(() =>
    Array.from({ length: n }).map(() => false)
  );
  const result = field.reduce((count, column, x) => {
    column.forEach((v, y) => {
      if (!v) return;
      if (visited[x][y]) return;
      dfs(field, x, y, visited);
      count++;
    });
    return count;
  }, 0);

  results.push(result);
}

function dfs(field, x, y, check) {
  check[x][y] = true;
  const d = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  d.forEach(([dx, dy]) => {
    const curX = x + dx;
    const curY = y + dy;
    if (
      curX < 0 ||
      curX >= field.length ||
      curY < 0 ||
      curY >= field[0].length
    ) {
      return;
    }
    if (!field[curX][curY]) return;
    if (check[curX][curY]) return;
    dfs(field, curX, curY, check);
  });
}
