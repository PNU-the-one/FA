function solution(n, s, a, b, fares) {
  const [S, A, B] = [s - 1, a - 1, b - 1];
  const field = Array.from({ length: n }).map((_, i) => {
    return Array.from({ length: n }).map((_, j) => (i === j ? 0 : Infinity));
  });

  fares.forEach(([c, d, f]) => {
    field[c - 1][d - 1] = f;
    field[d - 1][c - 1] = f;
  });

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        field[i][j] = Math.min(field[i][j], field[i][k] + field[k][j]);
      }
    }
  }

  return Array.from({ length: n })
    .map((_, i) => i)
    .reduce((min, center) => {
      return Math.min(
        min,
        field[S][center] + field[center][A] + field[center][B]
      );
    }, 1000000000);
}
