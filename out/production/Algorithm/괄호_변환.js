function solution(p) {
  if (!p || isRightString(p)) return p;
  return getRightString(p);
}
function getRightString(w) {
  if (!w) return "";
  const getU = (w) => {
    const arr = w.split("").reduce(
      (pre, s) => {
        if (!pre[0] && pre[1]) return pre;
        if (s === "(") return [pre[0] + 1, pre[1] + "("];
        if (s === ")") return [pre[0] - 1, pre[1] + ")"];
        return pre;
      },
      [0, ""]
    );
    return arr[1];
  };
  const getV = (w, u) => {
    return w.slice(u.length, w.length);
  };
  const u = getU(w);
  const v = getV(w, u);
  if (isRightString(u)) return u + getRightString(v);
  return (
    `(${getRightString(v)})` +
    u
      .slice(1, u.length - 1)
      .replace(")", "0")
      .replace("(", ")")
      .replace("0", "(")
  );
}
function isRightString(w) {
  const arr = [];
  return w.split("").reduce((pre, s) => {
    if (!pre) return pre;
    if (s === "(") {
      arr.push("(");
      return pre;
    } else if (arr.length === 0) {
      return false;
    } else {
      arr.splice(arr.length - 1, 1);
      return pre;
    }
  }, true);
}
