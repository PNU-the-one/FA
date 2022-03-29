class PriorityQueue {
  queue = Array.from({ length: 300001 }).map(() => null);
  tail = 1;
  constructor(compare) {
    this.compare = compare;
  }
  push(node) {
    this.queue[this.tail] = node;
    let idx = this.tail++;
    while (idx > 1) {
      if (this.compare(this.queue[idx], this.queue[Math.floor(idx / 2)]) < 0) {
        break;
      }
      [this.queue[idx], this.queue[Math.floor(idx / 2)]] = [
        this.queue[Math.floor(idx / 2)],
        this.queue[idx],
      ];
      idx = Math.floor(idx / 2);
    }
  }
  pop() {
    const result = this.queue[1];
    [this.queue[1], this.queue[this.tail - 1]] = [
      this.queue[this.tail - 1],
      this.queue[1],
    ];
    this.queue[--this.tail] = null;
    let idx = 1;
    while (idx * 2 < this.tail) {
      const isMaxLeft =
        !this.queue[idx * 2 + 1] ||
        this.compare(this.queue[idx * 2], this.queue[idx * 2 + 1]) > 0;
      const isMinParent = isMaxLeft
        ? this.compare(this.queue[idx], this.queue[idx * 2]) < 0
        : this.compare(this.queue[idx], this.queue[idx * 2 + 1]) < 0;

      if (isMaxLeft && isMinParent) {
        [this.queue[idx], this.queue[idx * 2]] = [
          this.queue[idx * 2],
          this.queue[idx],
        ];
        idx *= 2;
        continue;
      }
      if (!isMaxLeft && isMinParent) {
        [this.queue[idx], this.queue[idx * 2 + 1]] = [
          this.queue[idx * 2 + 1],
          this.queue[idx],
        ];
        idx = idx * 2 + 1;
        continue;
      }
      break;
    }
    return result;
  }
}
