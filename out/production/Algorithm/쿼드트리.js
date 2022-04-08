const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let i = 0;
const field = [];

rl.on("line", function (line) {
  if (!n) {
    n = parseInt(line);
    return;
  }
  if (++i < n) {
    field.push(line.split("").map((v) => parseInt(v)));
    return;
  }
  field.push(line.split("").map((v) => parseInt(v)));
  console.log(solution(field, n));
  rl.close();
}).on("close", function () {
  process.exit();
});

const isAllSameColor = (field) => {
  if (!field || !field[0]) return;
  const paperColor = field[0][0];
  return field.every((line) => {
    return line.every((color) => color === paperColor);
  })
    ? paperColor
    : -1;
};

const divideField = (field, n) => {
  const result = [[], [], [], []];
  const half = Math.floor(n / 2);

  for (let i = 0; i < half; i++) {
    result[0].push(field[i].slice(0, half));
  }
  for (let i = 0; i < half; i++) {
    result[1].push(field[i].slice(half, n));
  }
  for (let i = half; i < n; i++) {
    result[2].push(field[i].slice(0, half));
  }
  for (let i = half; i < n; i++) {
    result[3].push(field[i].slice(half, n));
  }

  return result;
};

const solution = (field, n) => {
  const checkColor = isAllSameColor(field);

  if (checkColor === 1 || checkColor === 0) return checkColor.toString();

  const half = Math.floor(n / 2);
  const dividedField = divideField(field, n);

  return `(${dividedField
    .map((curField) => solution(curField, half))
    .join("")})`;
};
