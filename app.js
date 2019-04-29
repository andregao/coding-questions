let test1 = [8, 3, 1, 4, 5, 7];
let test2 = [8, 4, 9, 1, 7, 0, 2, 10, 20, 12, 5];
console.log(quickSort(test2));

// console.log(selection([5]));

function bubble(target) {
  let range = target.length;
  for (let i = 0; i < target.length - 1; i++) { // total number of passes
    for (let j = 0; j < range - 1; j++) { // a single pass
      console.log('ran');
      if (target[j] > target[j + 1]) {
        let temp = target[j];
        target[j] = target[j + 1];
        target[j + 1] = temp;
      }
    }
    range--;
  }
  return target;
}

function selection(target) {
  // edge cases
  if (target.length < 2) {
    return target
  }

  // main
  let result = [...target]; // clone
  let smallest = {};
  let startingPoint = 1;
  let foundNewSmallest = true;
  for (let j = 0; j < result.length - 2; j++) { // total number of passes
    smallest.value = result[j]; // reset smallest to the first element of current pass
    smallest.index = j;
    console.log('initial smallest', smallest.value);
    for (let i = startingPoint; i < result.length; i++) { // each single pass
      console.log('checking', result[i]);

      if (result[i] < smallest.value) {
        smallest.value = result[i];
        smallest.index = i;
        foundNewSmallest = true;
        console.log('found', smallest.value);
      }
    }
    if (foundNewSmallest) {
      console.log('swapping');
      result[smallest.index] = result[j];
      result[j] = smallest.value;
      foundNewSmallest = false;
    }
    startingPoint++;
  }
  return result;
}

function insertion(target) {
  let result = [target[0]];
  //edge cases
  if (target.length < 2) {
    return target;
  }
  //main
  let inserted = false;
  for (let i = 1; i < target.length; i++) { // for each item in target
    for (let j = 0; j < i; j++) { // loop through result array
      console.log('target element', target[i]);
      console.log('result element', result[j]);
      if (target[i] < result[j]) {
        result.splice(j, 0, target[i]);
        inserted = true;
        console.log('new result', result);
        break;
      }
    }
    if (!inserted) { // append element to result
      result.push(target[i]);
      console.log('appended to result', result);
    }
    inserted = false;
    console.log('next item in target');
  }

  return result;
}

function mergeSort(target) {
  //base case
  if (target.length === 1) {
    return target;
  }
  //recursive case
  let half;
  target.length % 2 === 1
    ? half = (target.length + 1) / 2
    : half = target.length / 2;
  let firstHalf = target.slice(0, half);
  let secondHalf = target.slice(half, target.length);

  if (target.length >= 2) {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}

function merge(a, b) {
  console.log('merging', a, b);
  let result = [];
  let aIndex = 0;
  let bIndex = 0;

  while (typeof a[aIndex] !== 'undefined' && typeof b[bIndex] !== 'undefined') {
    if (b[bIndex] < a[aIndex]) {
      result.push(b[bIndex]);
      bIndex++;
    } else {
      result.push(a[aIndex]);
      aIndex++;
    }
  }
  // append the elements left after the loops
  if (aIndex < a.length) {
    result = [...result, ...a.slice(aIndex, a.length)]
  }
  if (bIndex < b.length) {
    result = [...result, ...b.slice(bIndex, b.length)]
  }
  console.log('merge result', result);
  return result;
}

function quickSort(target) {
  // base case
  if (target.length === 1) {
    return target;
  }

  // recursive case
  let pivotIndex = target.length - 1;
  let pivot = target[pivotIndex];
  console.log('current pivot', pivot);

  let i = 0;
  while (i < pivotIndex) {
    console.log('comparing value', target[i]);
    if (target[i] > pivot) {
      let temp = target[i];
      target[i] = target[pivotIndex - 1];
      target[pivotIndex - 1] = pivot;
      target[pivotIndex] = temp;
      // sorted
      pivotIndex--;
      console.log('sorted', target);
      console.log('new pivot index', pivotIndex);
    } else {
      i++;
    }
  }
  console.log(`pivot ${pivot} sorted: ${target} | pivot index is ${pivotIndex}`);

  // pivot is sorted, divide and conquer
  if (pivotIndex > 0 && pivotIndex < (target.length - 1)) {
    // have both left and right elements
    // let pivotIndexSnapshot = pivotIndex;
    console.log('Pivot index snapshot', pivotIndex);
    let newLeft = quickSort(target.slice(0, pivotIndex));
    let newRight = quickSort(target.slice(pivotIndex + 1, target.length));
    target = [...newLeft, pivot, ...newRight];
  } else if (pivotIndex === 0) {
    // no left
    let newRight = quickSort(target.slice(pivotIndex + 1, target.length));
    target = [pivot, ...newRight];
  } else {
    // no right
    let newLeft = quickSort(target.slice(0, pivotIndex));
    target = [...newLeft, pivot];
  }
  return target;
}
