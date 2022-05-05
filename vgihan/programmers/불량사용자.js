function solution(user_id, banned_id) {
  const set = new Set();
  const visited = Array.from({ length: user_id.length }).map((_, i) => i === 0);
  const state = Array.from({ length: banned_id.length }).map(() => false);
  const dfs = (idx, visited, state, bag) => {
    if (bag.length >= banned_id.length) {
      set.add(bag.sort().join(" "));
      return;
    }
    visited[idx] = true;
    user_id.forEach((user, i) => {
      if (visited[i]) return;
      const candidates = check(user, banned_id, state);
      if (candidates.length <= 0) return;
      const nextState = [...state];
      nextState[candidates[0]] = true;
      dfs(i, [...visited], [...nextState], [...bag, user]);
    });
  };
  user_id.forEach((user, i) => {
    const nextState = [...state];
    const candidates = check(user, banned_id, nextState);
    candidates.forEach((candidate) => {
      const nextState = [...state];
      nextState[candidate] = true;
      dfs(i, [...visited], [...nextState], [user]);
    });
  });
  return set.size;
}
function match(target, ban) {
  const regExp = `^${ban.replace(/\*/g, ".{1}")}$`;
  const regex = new RegExp(regExp);
  return regex.test(target);
}
function check(target, bans, state) {
  return bans.reduce((result, ban, i) => {
    if (state[i]) return result;
    if (!match(target, ban)) return result;
    return [...result, i];
  }, []);
}
