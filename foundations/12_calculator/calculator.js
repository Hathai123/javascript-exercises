const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  let result = 0;
  for (let num of numbers) result += num;
  return result;
  // solution
  // return numbers.reduce((total, current) => total + current, 0);
};

const multiply = function (numbers) {
  let result = 1;
  for (let num of numbers) result *= num;
  return result;
  // solution
  // return numbers.reduce((product, current) => product * current,1)
};

const power = function (base, expo) {
  return base ** expo;
};

const factorial = function (num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
