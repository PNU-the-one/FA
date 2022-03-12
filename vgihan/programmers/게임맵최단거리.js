function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const queue = [];
  const candidates = [
    { i: 0, j: 1 },
    { i: 1, j: 0 },
    { i: 0, j: -1 },
    { i: -1, j: 0 },
  ];
  const check = Array.from({ length: n }).map((v) => Array(m).fill(false));

  queue.push({ i: 0, j: 0, dist: 1 });
  while (queue.length) {
    const node = queue.shift();
    if (node.i === n - 1 && node.j === m - 1) return node.dist;
    candidates.forEach(({ i, j }) => {
      const next = { i: node.i + i, j: node.j + j };
      if (next.i < 0 || next.j < 0 || next.i >= n || next.j >= m) return;
      if (!maps[next.i][next.j]) return;
      if (check[next.i][next.j]) return;
      queue.push({ i: next.i, j: next.j, dist: node.dist + 1 });
      check[next.i][next.j] = true;
    });
  }
  return -1;
}
