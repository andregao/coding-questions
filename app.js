function fibonacciRecursive(index) {
  // base case
  if (index === 0) {
    return 0;
  }
  if (index === 1) {
    return 1;
  }
  // recursive case
  return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2);
}

function fibonacciIterative(index) {
  if (index === 0) {
    return 0;
  }
  if (index === 1) {
    return 1;
  }
  let a = 0, b = 1, result = 0;
  for (let i = 0; i < index - 1; i++) {
    result = a + b;
    let temp = b; // hold on to b
    b = a + b; // new b
    a = temp; // new a is old b
  }
  return result;
}

console.log(fibonacciRecursive(8));
console.log(fibonacciIterative(8));
