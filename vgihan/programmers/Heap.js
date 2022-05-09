class Heap {
  constructor(compare) {
    this.heap = Array.from({ length: 500 }).map(() => null);
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
