// 1. Function Declaration
function add(a, b) {
  return a + b;
}

// 2. Function Expression
const multiply = function(a, b) {
  return a * b;
};

// 3. Arrow Function
const subtract = (a, b) => a - b;

// Output print karna
console.log("Addition:", add(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Subtraction:", subtract(10, 5));
