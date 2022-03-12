function solution(relation) {
  const colLength = relation[0].length;
  const rowLength = relation.length;
  const keys = [];

  for (let i = 1; i < 2 ** colLength; i++) {
    const isPossibleKey = keys.reduce((pre, key) => {
      if (!pre) return false;
      if (((i ^ key) & key) === 0) return false;
      return true;
    }, true);
    if (!isPossibleKey) continue;
    if (isUnique(relation, i.toString(2).padStart(colLength, "0")))
      keys.push(i);
  }

  return keys.length;
}
function isUnique(table, bits) {
  const uniqueTable = table.reduce((set, tuple) => {
    const combination = bits.split("").reduce((preComb, bit, idx) => {
      if (bit === "1") return preComb + tuple[idx];
      return preComb;
    }, "");
    set.add(combination);
    return set;
  }, new Set());
  if (uniqueTable.size === table.length) return true;
  else return false;
}
