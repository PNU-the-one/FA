const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let i = 0;
const inputs = [];

rl.on("line", function (line) {
  if (!n) {
    n = parseInt(line);
    return;
  }
  if (++i < n) {
    inputs.push(line);
    return;
  }
  solution([...inputs, line]);
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(inputs) {
  const queue = new Queue();
  const result = [];

  inputs.forEach((element) => {
    const [cmd, param] = element.split(" ");
    switch (cmd) {
      case "push":
        queue.push(parseInt(param));
        break;
      case "pop":
        result.push(queue.pop());
        break;
      case "size":
        result.push(queue.getSize());
        break;
      case "empty":
        result.push(queue.isEmpty());
        break;
      case "front":
        result.push(queue.getFront());
        break;
      case "back":
        result.push(queue.getBack());
        break;
      default:
        break;
    }
  });
  console.log(result.join("\n"));
}

class Queue {
  constructor() {
    this.queue = Array.from({ length: 2000000 }).map((v) => null);
    this.head = 0;
    this.tail = 0;
  }
  push(value) {
    this.queue[this.head++] = value;
  }
  pop() {
    const front = this.getFront();
    if (front === -1) return -1;
    this.queue[this.tail++] = null;
    return front;
  }
  isEmpty() {
    return this.head === this.tail ? 1 : 0;
  }
  getFront() {
    return !!this.isEmpty() ? -1 : this.queue[this.tail];
  }
  getBack() {
    return !!this.isEmpty() ? -1 : this.queue[this.head - 1];
  }
  getSize() {
    return this.head - this.tail;
  }
}
