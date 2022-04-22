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
  if (numOfGems <= 1) return [1, 1];
  const gemSets = gems.reduce((set, gem) => {
    if (!set[gem]) set[gem] = { start: 0, count: 0, set: new Set() };
    return set;
  }, {});

  return gems.reduce(
    (result, gem, idx) => {
      gemSets[gem].start = idx + 1;
      gemSets[gem].count = 1;
      gemSets[gem].set.clear();
      gemSets[gem].set.add(gem);

      Object.keys(gemSets)
        .filter((key) => key !== gem)
        .forEach((key) => {
          if (gemSets[key].set.has(gem)) return;
          gemSets[key].set.add(gem);
          if (++gemSets[key].count < numOfGems) return;
          const curResult = [gemSets[key].start, idx + 1];
          if (result[1] - result[0] <= curResult[1] - curResult[0]) return;
          result = curResult;
        });

      return result;
    },
    [0, 1000001]
  );
}
