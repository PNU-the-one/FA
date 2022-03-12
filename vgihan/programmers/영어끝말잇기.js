function solution(n, words) {
  return words.reduce(
    (info, word, idx) => {
      const { result, endWords } = info;
      if (!endWords.length) {
        endWords.push(word);
        return info;
      }
      if (result[0] && result[1]) return info;
      if (endWords.includes(word)) {
        return {
          result: [(idx % n) + 1, parseInt(idx / n) + 1],
          endWords: [...endWords, word],
        };
      }
      const prevWord = endWords[endWords.length - 1];
      if (prevWord[prevWord.length - 1] !== word[0]) {
        return {
          result: [(idx % n) + 1, parseInt(idx / n) + 1],
          endWords: [...endWords, word],
        };
      }
      endWords.push(word);
      return info;
    },
    { result: [0, 0], endWords: [] }
  ).result;
}
