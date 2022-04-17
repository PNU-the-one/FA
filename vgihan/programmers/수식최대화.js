function solution(expression) {
  const orders = [
      ['*', '-', '+'],
      ['*', '+', '-'],
      ['-', '+', '*'],
      ['-', '*', '+'],
      ['+', '-', '*'],
      ['+', '*', '-'],  
  ];
  return orders.reduce((max, order) => {
      const arrayExp = getArrayExp(expression, order);
      const result = Math.abs(makeResult(arrayExp, order, 0));
      return result < max ? max : result;
  }, 0);
}

function makeResult(exp, order, idx) {
  const temp = [...exp];
  if(idx > 2) return "Error";
  for(let i=0; i<temp.length; i++) {
      if(temp[i] !== order[idx]) continue;
      temp.splice(i-1, 3, calculate(temp[i-1], temp[i+1], order[idx]));
      i--;
  }
  return temp.length === 1 ? temp[0] : makeResult(temp, order, idx+1);
}

function calculate(op1, op2, operand) {
  if(operand === "*") return op1*op2; 
  if(operand === "-") return op1-op2; 
  if(operand === "+") return op1+op2;
}

function getArrayExp(exp, order) {
  return exp.split('').reduce((result, c, i) => {
      if(order.includes(c)) {
          result.arr.push(parseInt(result.stack));
          result.arr.push(c);
          result.stack = "";
      } else {
          result.stack += c;
      }
      if(i >= exp.length-1) result.arr.push(parseInt(result.stack));
      return result;
  }, {stack: "", arr: []}).arr;
}