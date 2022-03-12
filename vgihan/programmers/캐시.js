function solution(cacheSize, cities) {
  return cities.reduce(
    (info, city) => {
      const target = info.cache.filter(
        (data) => data.toLowerCase() !== city.toLowerCase()
      );
      if (!cacheSize) {
        info.time += 5;
        return info;
      }
      if (target.length !== info.cache.length) {
        info.time += 1;
        info.cache = target;
        info.cache.push(city);
        return info;
      }
      if (info.cache.length >= cacheSize) {
        info.cache.splice(0, 1);
      }
      info.cache.push(city);
      info.time += 5;
      return info;
    },
    { time: 0, cache: [] }
  ).time;
}
