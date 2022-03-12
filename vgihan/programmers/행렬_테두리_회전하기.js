function solution(rows, columns, queries) {
  const field = Array.from({ length: rows }).map((r, ri) =>
    Array.from({ length: columns }).map((c, ci) => columns * ri + ci + 1)
  );
  return queries.map((query) => rotate(query, field));
}
function rotate(query, field) {
  const [y1, x1, y2, x2] = query.map((v) => v - 1);
  const temp = [];

  for (let i = x1; i < x2; i++) temp.push(field[y1][i]);
  for (let i = y1; i < y2; i++) temp.push(field[i][x2]);
  for (let i = x2; i > x1; i--) temp.push(field[y2][i]);
  for (let i = y2; i > y1; i--) temp.push(field[i][x1]);

  const min = Math.min(...temp);
  temp.splice(0, 0, temp[temp.length - 1]);

  for (let i = x1; i < x2; i++) field[y1][i] = temp.shift();
  for (let i = y1; i < y2; i++) field[i][x2] = temp.shift();
  for (let i = x2; i > x1; i--) field[y2][i] = temp.shift();
  for (let i = y2; i > y1; i--) field[i][x1] = temp.shift();

  return min;
}
