function solution(m, musicinfos) {
  const possibleList = musicinfos.reduce((musics, info) => {
    const filteredInfo = getInfo(info);
    const line = getLine(filteredInfo[0], filteredInfo[2]);
    if (!line.includes(replaceSharp(m))) return musics;
    musics.push([filteredInfo[1], line.length]);
    return musics;
  }, []);
  return possibleList.reduce(
    (pre, element) => {
      if (pre[1] < element[1]) return element;
      return pre;
    },
    ["(None)", 0]
  )[0];
}
function getLine(num, units) {
  const numOfRepeat = parseInt(num / units.length);
  const mod = num % units.length;
  const completeLine = Array.from({ length: numOfRepeat }).map((v) => units);
  const result = completeLine.join("") + units.slice(0, mod);
  return result;
}
function replaceSharp(str) {
  return str
    .replace(/C#/g, "Z")
    .replace(/D#/g, "Y")
    .replace(/F#/g, "X")
    .replace(/G#/g, "W")
    .replace(/A#/g, "V");
}
function getInfo(str) {
  const infoStr = str.split(",");
  const startTime = infoStr[0].split(":").map((v) => parseInt(v));
  const endTime = infoStr[1].split(":").map((v) => parseInt(v));
  const gap = (endTime[0] - startTime[0]) * 60 + (endTime[1] - startTime[1]);
  return [gap, infoStr[2], replaceSharp(infoStr[3])];
}
