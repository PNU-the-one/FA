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
    field.push(line.split(" ").map((v) => parseInt(v)));
    return;
  }
  field.push(line.split(" ").map((v) => parseInt(v)));
  const { white, blue } = solution(field, n);
  console.log(white);
  console.log(blue);
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

const createResult = (blue, white) => ({ blue, white });

const solution = (field, n) => {
  const checkColor = isAllSameColor(field);

  if (checkColor === 1) return createResult(1, 0);
  if (checkColor === 0) return createResult(0, 1);

  const half = Math.floor(n / 2);
  const dividedField = divideField(field, n);

  return dividedField.reduce((result, curField) => {
    const nextBlueCount = result.blue + solution(curField, half).blue;
    const nextWhiteCount = result.white + solution(curField, half).white;
    return createResult(nextBlueCount, nextWhiteCount);
  }, createResult(0, 0));
};
