function solution(gems) {
  const numOfGems = gems.reduce(
    (info, gem) => {
      if (!info.set.has(gem)) {
        info.count++;
        info.set.add(gem);
      }
      return info;
    },
    { count: 0, set: new Set() }
  ).count;
  const map = new Map();
  const result = [0, 1000001];

  let start = 0;
  let end = 0;
  let count = 0;

  while (end < gems.length) {
    while (map.size < numOfGems && end < gems.length) {
      if (!map.has(gems[end])) map.set(gems[end], 0);
      map.set(gems[end], map.get(gems[end]) + 1);
      end++;
    }
    while (map.size >= numOfGems && start < end) {
      map.set(gems[start], map.get(gems[start]) - 1);
      if (map.get(gems[start]) <= 0) map.delete(gems[start]);
      start++;
    }
    if (result[1] - result[0] > end - start) {
      result[0] = start;
      result[1] = end;
    }
    console.log(start, end);
  }

  return result;
}
