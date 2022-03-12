function solution(w, h) {
  return w * h - (w + h - getGCD(w, h));
}
function getGCD(w, h) {
  return h === 0 ? w : getGCD(h, w % h);
}
