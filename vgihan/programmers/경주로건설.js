function solution(board) {
  const queue = new Queue();
  const d = [
    { dx: 0, dy: 1 },
    { dx: 1, dy: 0 },
    { dx: 0, dy: -1 },
    { dx: -1, dy: 0 },
  ];
  const visited = Array.from({ length: board.length }).map(() =>
    Array.from({ length: board.length }).map(() =>
      Array.from({ length: 4 }).map(() => Infinity)
    )
  );

  if (board[1][0] === 0) queue.push({ x: 1, y: 0, direction: 1, cost: 100 });
  if (board[0][1] === 0) queue.push({ x: 0, y: 1, direction: 0, cost: 100 });

  while (!queue.isEmpty()) {
    const { x, y, direction, cost } = queue.pop();
    for (let i = 0; i < 4; i++) {
      const nextX = x + d[i].dx;
      const nextY = y + d[i].dy;
      const nextCost = (i === direction ? 100 : 600) + cost;
      if (nextX < 0 || nextY < 0) continue;
      if (nextX >= board.length || nextY >= board.length) continue;
      if (board[nextX][nextY] === 1) continue;
      if (visited[nextX][nextY][i] < nextCost) continue;
      visited[nextX][nextY][i] = nextCost;
      queue.push({ x: nextX, y: nextY, direction: i, cost: nextCost });
    }
  }
  return Math.min(...visited[board.length - 1][board.length - 1]);
}

class Queue {
  constructor() {
    this.queue = Array.from({ length: 100000 }).map(() => null);
    this.head = 0;
    this.tail = 0;
  }
  push(v) {
    this.queue[this.head++] = v;
  }
  pop() {
    const result = this.queue[this.tail];
    this.queue[this.tail++] = null;
    return result;
  }
  isEmpty() {
    return this.head === this.tail;
  }
}
