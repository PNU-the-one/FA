function solution(genres, plays) {
  const data = plays.reduce((map, play, idx) => {
    if (!map[genres[idx]]) map[genres[idx]] = { element: [], sum: 0 };
    map[genres[idx]].element.push({ id: idx, play: play });
    map[genres[idx]].sum += play;
    return map;
  }, {});
  const infos = Object.keys(data)
    .map((key) => {
      return { genre: key, ...data[key] };
    })
    .sort((a, b) => b.sum - a.sum);

  return infos.reduce((result, info) => {
    return [
      ...result,
      ...info.element
        .sort((a, b) => b.play - a.play)
        .slice(0, 2)
        .map((v) => v.id),
    ];
  }, []);
}
