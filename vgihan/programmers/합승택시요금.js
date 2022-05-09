function solution(n, s, a, b, fares) {
  const [S, A, B] = [s - 1, a - 1, b - 1];
  const field = Array.from({ length: n }).map(() => new Map());
  const heap = new Heap((a, b) => a.cost - b.cost);
  const visited = Array.from({ length: n }).map(() => false);
  const candidates = {
    A: [],
    B: [],
  };

  fares.forEach(([c, d, f]) => {
    field[c - 1].set(d - 1, f);
    field[d - 1].set(c - 1, f);
  });

  heap.push({ node: S, cost: 0, path: [], weights: [] });

  while (!heap.isEmpty()) {
    const { node, cost, path, weights } = heap.pop();
    if (node === A) {
      candidates.A.push({
        cost,
        info: path.map((p, i) => ({
          path: p,
          weight: weights[i],
          prevPath: path[i - 1] === undefined ? path[i - 1] : S,
        })),
      });
    }
    if (node === B) {
      candidates.B.push({
        cost,
        info: path.map((p, i) => ({
          path: p,
          weight: weights[i],
          prevPath: path[i - 1] === undefined ? path[i - 1] : S,
        })),
      });
    }
    visited[node] = true;
    field[node].forEach((weight, t) => {
      if (visited[t]) return;
      heap.push({
        node: t,
        cost: cost + weight,
        path: [...path, t],
        weights: [...weights, weight],
      });
    });
  }

  const eachMin = candidates.A.reduce((result, a) => {
    candidates.B.forEach((b) => {
      const c = a.info.filter((av) => {
        return b.info.reduce((check, bv) => {
          if (check) return true;
          if (bv.path === av.path && bv.prevPath === av.prevPath) return true;
          return false;
        }, false);
      });
      const sum = c.reduce((r, { weight }) => {
        return weight + r;
      }, 0);
      result.push(a.cost + b.cost - sum);
    });
    return result;
  }, []);

  return Math.min(...eachMin);
}

class Heap {
  constructor(compare) {
    this.heap = Array.from({ length: 100000 }).map(() => null);
    this.tail = 1;
    this.compare = compare;
  }
  isEmpty() {
    return this.tail === 1;
  }
  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
  push(v) {
    this.heap[this.tail] = v;
    let curr = this.tail++;
    let next = parseInt(curr / 2);
    while (
      this.heap[next] !== null &&
      this.compare(this.heap[next], this.heap[curr]) > 0
    ) {
      this.swap(curr, next);
      curr = next;
      next = parseInt(curr / 2);
    }
  }
  pop() {
    const result = this.heap[1];
    this.heap[1] = null;
    this.swap(1, --this.tail);
    let curr = 1;
    let next = this.getNextNode(curr);
    while (next > -1) {
      this.swap(curr, next);
      curr = next;
      next = this.getNextNode(curr);
    }
    return result;
  }
  getNextNode(curIndex) {
    const left = curIndex * 2;
    const right = curIndex * 2 + 1;
    if (this.heap[left] === null) return -1;
    if (this.heap[right] === null) {
      if (this.compare(this.heap[curIndex], this.heap[left]) > 0) return left;
      else return -1;
    }
    const comp = this.compare(this.heap[left], this.heap[right]);
    if (comp <= 0 && this.compare(this.heap[curIndex], this.heap[right]) > 0)
      return left;
    if (comp > 0 && this.compare(this.heap[curIndex], this.heap[left]) > 0)
      return right;
    return -1;
  }
}
