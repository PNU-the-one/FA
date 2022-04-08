function solution(places) {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const checkGap = (init, field) => {
    const q = queue();
    const check = {};
    q.push({ x: init.x, y: init.y, dist: 0 });
    check[init.x + "," + init.y] = true;
    while (!q.isEmpty()) {
      const curPlace = q.pop();
      if (curPlace.dist > 2) return true;
      for (let i = 0; i < 4; i++) {
        const x = curPlace.x + dx[i];
        const y = curPlace.y + dy[i];
        if (x < 0 || y < 0 || x >= field.length || y >= field.length) continue;
        if (field[x][y] === "X") continue;
        if (check[x + "," + y]) continue;
        if (field[x][y] === "P" && curPlace.dist < 2) return false;
        q.push({ x, y, dist: curPlace.dist + 1 });
        check[x + "," + y] = true;
      }
    }
    return true;
  };
  return places.reduce(
    (answer, place, idx) => {
      place.forEach((line, x) => {
        line.split("").forEach((point, y) => {
          if (point !== "P") return;
          if (checkGap({ x, y }, place)) return;
          answer[idx] = 0;
        });
      });
      return answer;
    },
    Array.from({ length: places.length }).map((v) => 1)
  );
}
function queue() {
  const list = [];
  const push = (element) => {
    list.push(element);
  };
  const pop = () => {
    if (!list.length) return;
    return list.shift();
  };
  const isEmpty = () => {
    return list.length === 0;
  };
  return { push, pop, isEmpty };
}
