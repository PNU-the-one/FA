"use strict";

function solution(s) {
  let min = 1000;
  if (s.length === 1) return 1;
  for (let i = 1; i <= s.length / 2; i++) {
    const curLength = getZipLength(s, i);
    if (min > curLength) min = curLength;
  }
  return min;
}
function getZipLength(s, num) {
  let strs = [];
  let temp = s.slice(0, num);
  let count = 1;
  let lastIndex = 0;
  for (let i = num + num; i <= s.length; i += num) {
    const curStr = s.slice(i - 2 * num, i - num);
    const nextStr = s.slice(i - num, i);
    if (curStr !== nextStr) {
      lastIndex = i - num;
      strs.push(count <= 1 ? temp : count + temp);
      temp = nextStr;
      count = 1;
    } else {
      lastIndex = i;
      count++;
    }
  }
  strs.push(count > 1 ? count + temp : "");
  strs.push(s.slice(lastIndex, s.length));

  return strs.join("").length;
}
