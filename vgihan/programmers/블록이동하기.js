const ROW = "ROW";
const COL = "COL";
const rowMoves = [
  {
    move: [-1, 0],
    state: ROW,
    condition: [
      [-1, 0],
      [-1, 1],
    ],
  },
  {
    move: [1, 0],
    state: ROW,
    condition: [
      [1, 0],
      [1, 1],
    ],
  },
  { move: [0, -1], state: ROW, condition: [[0, -1]] },
  { move: [0, 1], state: ROW, condition: [[0, 2]] },
  {
    move: [-1, 0],
    state: COL,
    condition: [
      [-1, 0],
      [-1, 1],
    ],
  },
  {
    move: [-1, 1],
    state: COL,
    condition: [
      [-1, 0],
      [-1, 1],
    ],
  },
  {
    move: [0, 0],
    state: COL,
    condition: [
      [1, 0],
      [1, 1],
    ],
  },
  {
    move: [0, 1],
    state: COL,
    condition: [
      [1, 0],
      [1, 1],
    ],
  },
];
const colMoves = [
  {
    move: [0, -1],
    state: ROW,
    condition: [
      [0, -1],
      [1, -1],
    ],
  },
  {
    move: [1, -1],
    state: ROW,
    condition: [
      [0, -1],
      [1, -1],
    ],
  },
  {
    move: [0, 0],
    state: ROW,
    condition: [
      [0, 1],
      [1, 1],
    ],
  },
  {
    move: [1, 0],
    state: ROW,
    condition: [
      [0, 1],
      [1, 1],
    ],
  },
  { move: [-1, 0], state: COL, condition: [[-1, 0]] },
  { move: [1, 0], state: COL, condition: [[2, 0]] },
  {
    move: [0, -1],
    state: COL,
    condition: [
      [0, -1],
      [1, -1],
    ],
  },
  {
    move: [0, 1],
    state: COL,
    condition: [
      [0, 1],
      [1, 1],
    ],
  },
];
const moves = {
  ROW: rowMoves,
  COL: colMoves,
};

const getNodeStr = (x, y, state) => {
  return `(${x},${y}) ${state}`;
};

const conditionCheck = (x, y, condition, board) => {
  return condition.reduce((result, c) => {
    if (!result) return false;
    const [checkX, checkY] = [x + c[0], y + c[1]];
    if (
      checkX < 0 ||
      checkY < 0 ||
      checkX >= board.length ||
      checkY >= board.length
    )
      return false;
    if (board[checkX][checkY] === 1) return false;
    return true;
  }, true);
};

const isEnd = (x, y, state, length) => {
  return (
    (x === length - 1 && y === length - 2 && state === ROW) ||
    (x === length - 2 && y === length - 1 && state === COL)
  );
};

const solution = (board) => {
  const initNode = { x: 0, y: 0, state: ROW, count: 0 };
  const queue = new Queue();
  const visited = new Set();
  let min = 10000000000;
  queue.push(initNode);
  visited.add(getNodeStr(0, 0, ROW));

  while (!queue.isEmpty()) {
    const curNode = queue.pop();
    const [curX, curY, curState] = [curNode.x, curNode.y, curNode.state];
    if (isEnd(curX, curY, curState, board.length)) {
      min = Math.min(min, curNode.count);
      continue;
    }
    moves[curState].forEach(({ move, state, condition }) => {
      const [nextX, nextY, nextState] = [curX + move[0], curY + move[1], state];
      const check = getNodeStr(nextX, nextY, nextState);
      if (visited.has(check)) return;
      if (!conditionCheck(curX, curY, condition, board)) return;
      visited.add(check);
      queue.push({
        x: nextX,
        y: nextY,
        state: nextState,
        count: curNode.count + 1,
      });
    });
  }

  return min;
};

class Queue {
  constructor() {
    this.queue = Array.from({ length: 100000 }).map(() => null);
    this.head = 0;
    this.tail = 0;
  }
  isEmpty() {
    return this.head === this.tail;
  }
  push(v) {
    this.queue[this.tail++] = v;
  }
  pop() {
    const result = this.queue[this.head];
    this.queue[this.head++] = null;
    return result;
  }
}
