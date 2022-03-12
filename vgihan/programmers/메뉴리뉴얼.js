"use strict";

function solution(orders, course) {
  const calComb = orders.reduce((result, order) => {
    getCombination(order).forEach((menu) => {
      if (!result[menu]) result[menu] = 0;
      result[menu]++;
    });
    return result;
  }, {});
  const classification = course.reduce((pre, length) => {
    pre[length] = Object.entries(calComb).filter(
      (v) => v[0].length === length && v[1] > 1
    );
    return pre;
  }, {});
  const result = Object.keys(classification)
    .reduce((pre, num) => {
      const maxValue = classification[num].reduce((max, menu) => {
        if (max < menu[1]) return menu[1];
        return max;
      }, 0);
      pre.push(...classification[num].filter((v) => v[1] === maxValue));
      return pre;
    }, [])
    .sort()
    .map((v) => v[0]);

  return result;
}
function getCombination(str) {
  const init = Array.from({ length: 2 ** str.length - 1 }).map((v, i) => i + 1);
  return init.reduce((pre, v) => {
    const select = v.toString(2).padStart(str.length, "0");
    const curMenu = str
      .split("")
      .sort()
      .reduce((selectedCook, cook, idx) => {
        if (select[idx] === "0") return selectedCook;
        selectedCook.push(cook);
        return selectedCook;
      }, []);
    if (curMenu.length <= 1) return pre;
    pre.push(curMenu.join(""));
    return pre;
  }, []);
}
