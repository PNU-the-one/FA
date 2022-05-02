function solution(stones, k) {
  let start = 1;
  let end = 200000000;
  let mid;

  while (start < end) {
    mid = Math.floor((start + end) / 2);
    const result = check(stones, mid);
    if (result >= k) {
      end = mid;
      continue;
    }
    if (result < k) {
      start = mid + 1;
      continue;
    }
  }

  return Math.floor((start + end) / 2);
}
function check(stones, n) {
  let count = 0;
  let max = 0;
  for (let i = 0; i < stones.length; i++) {
    if (stones[i] <= n) {
      count++;
      continue;
    }
    max = Math.max(count, max);
    count = 0;
  }
  return Math.max(count, max);
}
