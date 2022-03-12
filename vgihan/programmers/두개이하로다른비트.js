function solution(numbers) {
  const getFirstZero = (number) => {
    return ("0" + number.toString(2))
      .split("")
      .reverse()
      .reduce((firstZero, bit, idx) => {
        if (firstZero !== -1) return firstZero;
        if (bit === "0") return idx;
        return -1;
      }, -1);
  };
  return numbers.map((num) => {
    return num % 2 ? num + 2 ** (getFirstZero(num) - 1) : num + 1;
  });
}
