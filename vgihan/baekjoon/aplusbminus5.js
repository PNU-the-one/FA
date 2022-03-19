const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  if (line === "0 0") {
    rl.close();
    return;
  }
  console.log(
    line
      .split(" ")
      .map((v) => parseInt(v))
      .reduce((sum, v) => sum + v, 0)
  );
}).on("close", function () {
  process.exit();
});
