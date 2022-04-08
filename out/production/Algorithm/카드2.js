const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  console.log(solution(parseInt(line)));
  rl.close();
}).on("close", function () {
  process.exit();
});

class Queue {
  constructor(n) {
    this.queue = Array.from({ length: 500000 }).map((v, i) =>
      i < n ? i + 1 : null
    );
    this.head = n;
    this.tail = 0;
  }
  push(value) {
    this.queue[this.head++] = value;
  }
  pop() {
    const result = this.queue[this.tail];
    this.queue[this.tail++] = null;
    return result;
  }
  getLength() {
    return this.head - this.tail;
  }
}

function solution(n) {
  const queue = new Queue(n);

  while (queue.getLength() > 1) {
    queue.pop();
    const next = queue.pop();
    queue.push(next);
  }

  return queue.pop();
}
