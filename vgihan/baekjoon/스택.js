const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let i = 0;
const cmds = [];

rl.on("line", function (line) {
  if (!n) {
    n = parseInt(line);
    return;
  }
  if (i++ < n - 1) {
    cmds.push(line);
    return;
  }
  cmds.push(line);
  console.log(solution(cmds).join("\n"));
  rl.close();
}).on("close", function () {
  process.exit();
});

const stack = () => {
  const arr = Array.from({ length: 100000 }).map((v) => null);
  let top = -1;
  const push = (param) => {
    arr[++top] = param;
  };
  const pop = () => {
    if (isEmpty()) return -1;
    const result = arr[top];
    arr[top--] = null;
    return result;
  };
  const size = () => {
    return top + 1;
  };
  const isEmpty = () => {
    return top === -1 ? 1 : 0;
  };
  const getTop = () => {
    return arr[top] || -1;
  };
  return { push, pop, size, isEmpty, getTop };
};

function solution(inputs) {
  const s = stack();
  return inputs.reduce((results, cmd) => {
    const [command, param] = cmd.split(" ");
    switch (command) {
      case "push":
        s.push(parseInt(param));
        break;
      case "pop":
        results.push(s.pop().toString());
        break;
      case "size":
        results.push(s.size().toString());
        break;
      case "empty":
        results.push(s.isEmpty().toString());
        break;
      case "top":
        results.push(s.getTop().toString());
        break;
      default:
        break;
    }
    return results;
  }, []);
}
