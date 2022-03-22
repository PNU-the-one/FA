const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let i = 0;
const inputs = [];

rl.on("line", function (line) {
  if (!n) {
    n = parseInt(line);
    return;
  }
  if (++i < n) {
    inputs.push(line.split("").map((v) => parseInt(v)));
    return;
  }
  inputs.push(line.split("").map((v) => parseInt(v)));
  const result = solution(inputs);
  console.log([result.length, ...result.sort((a, b) => a - b)].join("\n"));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(field) {
  const visited = Array.from({ length: n }).map(() =>
    Array.from({ length: n }).map(() => false)
  );
  return field.reduce((homeCounts, column, y) => {
    column.forEach((isHome, x) => {
      if (!isHome) return;
      if (visited[y][x]) return;
      return homeCounts.push(dfs(x, y, field, visited));
    });
    return homeCounts;
  }, []);
}

function dfs(x, y, field, visited) {
  visited[y][x] = true;
  const d = [
    { dx: 1, dy: 0 },
    { dx: 0, dy: 1 },
    { dx: -1, dy: 0 },
    { dx: 0, dy: -1 },
  ];
  return d.reduce((count, { dx, dy }) => {
    const curX = x + dx;
    const curY = y + dy;
    if (curX < 0 || curX >= field.length || curY < 0 || curY >= field.length)
      return count;
    if (!field[curY][curX]) return count;
    if (visited[curY][curX]) return count;
    return count + dfs(curX, curY, field, visited);
  }, 1);
}
