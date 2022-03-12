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
  const { negative, zero, positive } = solution(field, n);
  console.log(negative);
  console.log(zero);
  console.log(positive);
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
    : 2;
};

const divideField = (field, n) => {
  const result = [[], [], [], [], [], [], [], [], []];
  const oneThird = Math.floor(n / 3);
  const twoThird = Math.floor((n * 2) / 3);
  const d = [
    [0, oneThird],
    [oneThird, twoThird],
    [twoThird, n],
  ];

  d.forEach((x, xidx) => {
    d.forEach((y, yidx) => {
      for (let i = y[0]; i < y[1]; i++) {
        result[xidx * 3 + yidx].push(field[i].slice(x[0], x[1]));
      }
    });
  });

  return result;
};

const createResult = (negative, zero, positive) => ({
  negative,
  zero,
  positive,
});

const solution = (field, n) => {
  const checkColor = isAllSameColor(field);

  if (checkColor === -1) return createResult(1, 0, 0);
  if (checkColor === 0) return createResult(0, 1, 0);
  if (checkColor === 1) return createResult(0, 0, 1);

  const oneThird = Math.floor(n / 3);
  const dividedField = divideField(field, n);

  return dividedField.reduce((result, curField) => {
    const { negative, zero, positive } = solution(curField, oneThird);
    const nextNegativeCount = result.negative + negative;
    const nextZeroCount = result.zero + zero;
    const nextPositiveCount = result.positive + positive;
    return createResult(nextNegativeCount, nextZeroCount, nextPositiveCount);
  }, createResult(0, 0, 0));
};
