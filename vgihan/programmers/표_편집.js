function Node(index) {
  this.index = index;
  this.prev = null;
  this.next = null;
}
function List(length, selected) {
  this.head = new Node(0);
  this.tail = this.head;
  this.selected = this.head;
  this.stack = [];
  for (let i = 1; i < length; i++) {
    const temp = new Node(i);
    this.tail.next = temp;
    temp.prev = this.tail;
    this.tail = temp;
    if (i === selected) {
      this.selected = temp;
    }
  }
  this.up = (count) => {
    for (let i = 0; i < count; i++) {
      this.selected = this.selected.prev;
    }
  };
  this.down = (count) => {
    for (let i = 0; i < count; i++) {
      this.selected = this.selected.next;
    }
  };
  this.delete = () => {
    if (this.selected === this.head) {
      this.head = this.head.next;
      this.head.prev = null;
      this.stack.push(this.selected);
      this.selected = this.head;
      return;
    }
    if (this.selected === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.stack.push(this.selected);
      this.selected = this.tail;
      return;
    }
    this.selected.prev.next = this.selected.next;
    this.selected.next.prev = this.selected.prev;
    this.stack.push(this.selected);
    this.selected = this.selected.next;
  };
  this.recover = () => {
    const targetNode = this.stack[this.stack.length - 1];
    this.stack.splice(this.stack.length - 1, 1);
    if (!targetNode) return;
    if (!targetNode.prev) {
      this.head.prev = targetNode;
      this.head = targetNode;
      return;
    }
    if (!targetNode.next) {
      this.tail.next = targetNode;
      this.tail = targetNode;
      return;
    }
    targetNode.prev.next = targetNode;
    targetNode.next.prev = targetNode;
  };
  this.result = () => {
    let temp = this.head;
    const checkList = Array.from({ length: length }).map((v, i) => "X");
    while (temp) {
      checkList[temp.index] = "O";
      temp = temp.next;
    }
    return checkList.join("");
  };
}

function solution(n, k, cmd) {
  const list = new List(n, k);

  cmd.forEach((command) => {
    const [type, size] = command.split(" ");

    switch (type) {
      case "D":
        if (!size) return;
        list.down(parseInt(size));
        break;
      case "U":
        if (!size) return;
        list.up(parseInt(size));
        break;
      case "C":
        list.delete();
        break;
      case "Z":
        list.recover();
        break;
    }
  });

  return list.result();
}
