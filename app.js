function findFactorialRecursive(number) {
  // edge case
  if (number < 1) {
    if (number === 0) {
      return 1;
    }
    if (number < 0) {
      return null
    }
  }
  // base case
  if (number === 1) {
    return 1;
  }
  // recursive case
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let result = 1; // for both 0 and 1
  if (number < 0) {
    return null;
  }
  while (number > 1) {
    result = result * number;
    number--;
  }
  return result;
}

let target = 1;

console.log(findFactorialRecursive(target));
console.log(findFactorialIterative(target));
