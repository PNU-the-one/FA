function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let curWeight = 0;

  const queue = Array.from({ length: bridge_length }).map((v) => 0);
  const list = [...truck_weights];
  const endTrucks = [];
  const move = (nextValue) => {
    queue.push(nextValue);
    const endTarget = queue.shift();
    if (!endTarget) return;
    endTrucks.push(endTarget);
    curWeight -= endTarget;
  };

  while (true) {
    if (endTrucks.length === truck_weights.length) return time;
    if (weight < curWeight + list[0] - queue[0] || list.length === 0) {
      move(0);
      time++;
      continue;
    }
    curWeight += list.length ? list[0] : 0;
    move(list.shift());
    time++;
  }
}
