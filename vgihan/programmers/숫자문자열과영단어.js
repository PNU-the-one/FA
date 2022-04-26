function solution(s) {
  const map = new Map();
  map.set("zero", "0");
  map.set("one", "1");
  map.set("two", "2");
  map.set("three", "3");
  map.set("four", "4");
  map.set("five", "5");
  map.set("six", "6");
  map.set("seven", "7");
  map.set("eight", "8");
  map.set("nine", "9");

  let result = "";

  s.split("").reduce((memo, c) => {
    if (!isNaN(c)) {
      result += c;
      return "";
    }
    memo += c;
    if (map.has(memo)) {
      result += map.get(memo);
      return "";
    }
    return memo;
  }, "");

  return parseInt(result);
}
