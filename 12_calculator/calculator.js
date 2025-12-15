const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((total, amount) => (total += amount), 0);
};

const multiply = function (arr) {
  return arr.reduce((total, amount) => (total *= amount), 1);
};

const power = function (num, pow) {
  let total = 1;
  for (let i = 0; i < pow; i++) {
    total *= num;
  }
  return total;
};

const factorial = function (n) {
  let fact = 1;
  for (let i = n; i > 0; i--) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

factorial(0);
