const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = array => {
  let sum = 0;
  array.forEach(element => {
      sum += element;
  });
  return sum;
};

const multiply = array => {
  let sum = 1;
  array.forEach(element => {
    sum = sum * element;
  })
  return sum;
};

const power = (a, p) => Math.pow(a, p);


const factorial = a => {
  if (a === 0) return 1;
  return (a * factorial(a - 1));
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
