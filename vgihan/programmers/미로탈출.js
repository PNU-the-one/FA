function solution(n, start, end, roads, traps) {
  const field = roads.reduce(
    (pre, [source, target, cost]) => {
      pre[source - 1][target - 1] = cost;
      return pre;
    },
    Array.from({ length: n }).map(() =>
      Array.from({ length: n }).map(() => Infinity)
    )
  );
  const dist = Array.from({ length: n }).map(() =>
    Array.from({ length: 1 << traps.length }).map(() => Infinity)
  );
  const visited = Array.from({ length: n }).map(() =>
    Array.from({ length: 1 << traps.length }).map(() => false)
  );
  const queue = new Queue();

  dist[start - 1][0] = 0;
  queue.push({ node: start - 1, map: field, state: 0 });

  while (!queue.isEmpty()) {
    const { node, map, state } = queue.pop();
    let curState = state;
    const curCost = [...map[node]];
    visited[node][state] = true;
    if (traps.includes(node + 1)) {
      curState = state ^ (1 << traps.indexOf(node + 1));
      for (let i = 0; i < n; i++) {
        [map[i][node], map[node][i]] = [map[node][i], map[i][node]];
      }
    }
    map[node].forEach((c, t) => {
      if (visited[t][curState]) return;
      if (c >= Infinity) return;
      dist[t][curState] = Math.min(dist[t][curState], dist[node][state] + c);
      queue.push({ node: t, map, state: curState });
    });
  }

  return Math.min(...dist[end - 1]);
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
