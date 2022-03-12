const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let costs;

rl.on("line", function (line) {
  if (!n) {
    n = parseInt(line);
    return;
  }
  if (!costs) {
    costs = line.split(" ").map((v) => parseInt(v));
    return;
  }
  console.log(
    solution(
      n,
      costs,
      line.split(" ").map((v) => parseInt(v))
    )
  );
  rl.close();
}).on("close", function () {
  process.exit();
});
function solution(n, costs, prices) {
  prices[prices.length - 1] = 0;
  return prices.reduce(
    (info, price, i) => {
      return price < info.targetPrice
        ? {
            cost: costs[i],
            targetPrice: price,
            result: info.cost * info.targetPrice + info.result,
          }
        : {
            cost: info.cost + costs[i],
            targetPrice: info.targetPrice,
            result: info.result,
          };
    },
    { cost: 0, targetPrice: 1000000000, result: 0 }
  ).result;
}
