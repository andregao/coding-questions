{
  const isAnagram = (a, b) => {
    if (a.length !== b.length) {
      return false;
    }
    if (a === b) {
      return true;
    }

    const table = {};
    for (const c of a) {
      table[c] = table[c] ? ++table[c] : 1;
    }
    for (const c of b) {
      if (!table[c]) {
        // undefined or zero
        return false;
      }
      table[c]--;
    }
    return true;
  };

  // const result = isAnagram('anagram', 'nagaram');
  // console.log(result);
}

{
  const sumZero = arr => {
    let a = 0;
    let b = arr.length - 1;
    while (a < b) {
      const sum = arr[a] + arr[b];
      if (sum === 0) {
        return [arr[a], arr[b]];
      } else if (sum > 0) {
        b--;
      } else {
        a++;
      }
    }
    return undefined;
  };
  const target = [-4, -3, -2, -1, 0, 5];
  // console.log(sumZero(target));
}

{
  const countUnique = arr => {
    if (arr.length === 0) {
      return 0;
    }
    let result = 1;
    arr.forEach((num, i) => {
      if (num === arr[i + 1]) {
        i++;
      } else if (arr[i + 1]) {
        result++;
      }
    });
    return result;
  };

  const target = [1, 1, 1, 1, 1];
  const target2 = [1, 2, 4, 4, 4, 7, 7, 12, 12, 13];
  // console.log(countUnique(target));
}

{
  const factorialRecursive = n => {
    if (n < 0) {
      return undefined;
    }
    if (n >= 0 && n <= 2) {
      return n;
    }
    return n * factorialRecursive(n - 1);
  };

  // console.log(factorialRecursive(5));
}

{
  const binarySearch = (arr, n) => {
    const getMidIndex = (aIndex, bIndex) => Math.floor((aIndex + bIndex) / 2);

    let head = 0;
    let tail = arr.length - 1;
    if (arr[head] === n) return head;
    if (arr[tail] === n) return tail;

    let pointer = getMidIndex(head, tail);

    while (arr[pointer] !== n) {
      let prevPointer = pointer;
      if (arr[pointer] > n) {
        tail = pointer - 1;
        pointer = getMidIndex(head, pointer);
      } else {
        head = pointer + 1;
        pointer = getMidIndex(pointer, tail);
      }
      console.log(head, pointer, tail);
      if (head >= tail) {
        return -1;
      }
    }
    return pointer;
  };

  // console.log(binarySearch([2, 5, 7, 9, 13, 15, 28, 30, 40, 43, 50, 99], 51));
}

{
  const stringSearch = (target, sample) => {
    let matchCount = 0;
    if (target.length === 0 || sample.length === 0) {
      return matchCount;
    }
    for (let i = 0; i < target.length; i++) {
      for (let j = 0; j < sample.length; j++) {
        if (sample[j] !== target[i + j]) {
          break;
        }
        if (j === sample.length - 1) {
          matchCount++;
        }
      }
    }
    return matchCount;
  };

  // console.log(stringSearch("hello there my friend yello", "r"));
}

{
  const bubbleSort = arr => {
    if (arr.length <= 1) {
      return arr;
    }
    for (let i = arr.length - 1; i > 0; i--) {
      let swapped = false; // optimization for almost sorted arrays
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
          swapped = true;
        }
      }
      console.log('single pass');
      if (!swapped) {
        return arr; // short circuit
      }
    }
    return arr;
  };

  // console.log(bubbleSort([2, 8, 4, 10, 11, 13, 12])); // optimized for almost sorted
}

{
  const selectionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      let newMin = false;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
          newMin = true;
        }
      }
      if (newMin) {
        console.log('swapping', arr[i], arr[minIndex]);
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
      }
    }
    return arr;
  };

  // console.log('selection sort', selectionSort([34, 22, 10, 19, 17]))
}

{
  const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
      for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
        console.log(`index = ${i}`, arr[j], arr[j - 1]);
        console.log('before', arr);
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        console.log('after', arr);
      }
    }
    return arr;
  };

  // console.log(insertionSort([10, 7, 3, 1, 6, 20, 11]));
}

{
  const merge = (a, b) => {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < a.length && j < b.length) {
      if (a[i] > b[j]) {
        result.push(b[j]);
        j++;
      } else if (a[i] === b[j]) {
        result.push(a[i]);
        result.push(b[j]);
        i++;
        j++;
      } else {
        result.push(a[i]);
        i++;
      }
    }
    if (i !== a.length) {
      result = result.concat(a.slice(i));
    }
    if (j !== b.length) {
      result = result.concat(b.slice(j));
    }
    return result;
  };

  const mergeSort = arr => {
    // break array in to smaller pieces until each length is one
    if (arr.length <= 1) {
      return arr;
    }
    if (arr.length >= 2) {
      const mid = Math.floor(arr.length / 2);
      // console.log(mid, arr.slice(0, mid), arr.slice(mid, arr.length));
      return merge(
        mergeSort(arr.slice(0, mid)),
        mergeSort(arr.slice(mid, arr.length))
      );
    }
  };

  // console.log(mergeSort([3, 44, 38, 5, 33, 47, 15, 36, 26, 27, 2, 33]));
}

{
  const getPivotIndex = (arr, start, end) => {
    const pivot = arr[start];
    let count = 0;
    for (let i = start + 1; i <= end; i++) {
      if (arr[i] < pivot) {
        // swap with first element in range
        [arr[i], arr[start + 1 + count]] = [arr[start + 1 + count], arr[i]];
        // update counter
        count++;
      }
    }
    const finalIndex = start + count;
    [arr[finalIndex], arr[start]] = [arr[start], arr[finalIndex]];
    // console.log('section sorted', arr);
    return finalIndex;
  };

  // console.log(getPivotIndex([0, 3, 1, 4, 9, 7, 5, 8, 10], 0, 2));

  const quickSort = (arr, start = 0, end = arr.length - 1) => {
    // base case
    if (start >= end) {
      // console.log('no need to sort', start, end);
      return;
    }
    // recursive case
    const pivotIndex = getPivotIndex(arr, start, end);
    pivotIndex > 1 && quickSort(arr, start, pivotIndex - 1);
    pivotIndex < arr.length - 3 && quickSort(arr, pivotIndex + 1, end);
    return arr;
  };

  // console.log(quickSort([7, 6, 4, 9, 3, 0, 10, 8, 5, 1, 2]));
}

{ //radix sort
  const getDigit = (num, index) => {
    const s = String(num);
    const sIndex = s.length - 1 - index;
    if (sIndex < 0) {
      return 0;
    }
    return Number(s[sIndex]);
  };

  const getDigitMath = (num, index) => {
    num = Math.abs(num);
    const temp = 10 ** (index + 1);
    const temp2 = 10 ** (index);
    return Math.floor((num % temp) / temp2);
  };

  const getDigitMath2 = (num, index) => {
    num = Math.abs(num);
    const lowered = num / Math.pow(10, index);
    return Math.floor(lowered % 10);
  };

  const digitCount = num => {
    let i = 0;
    while (true) {
      i++;
      if (num < Math.pow(10, i)) {
        break;
      }
    }
    return i
  };

  const digitCount2 = num => {
    if (num === 0) {
      return 1
    }
    return Math.floor(Math.log10(num)) + 1;
  };

  const mostDigits = arr => {
    let max = 0;
    arr.forEach(num => {
      max = Math.max(digitCount(num), max);
    });
    return max;
  };

  const radixSort = arr => {
    const maxDigits = mostDigits(arr);
    for (let i = 0; i < maxDigits; i++) {
      let buckets = [];
      arr.forEach(item => {
        const digit = getDigit(item, i);
        (buckets[digit] === undefined) && (buckets[digit] = []);
        buckets[digit].push(item);
      });
      let result = [];
      buckets.forEach(item => { // forEach method skips empty items
        result = result.concat(item);
      });
      arr = result;
    }
    return arr;
  };

  // console.log(radixSort([71, 4102, 9, 14, 505, 1842, 92, 6]))
}

{ // linked lists
  class Node {
    constructor(value) {
      this.val = value;
      this.next = null;
    }
  }

  class SinglyLinkedList {
    constructor() {
      this.length = 0;
      this.head = null;
      this.tail = null;
    }

    push(val) {
      const node = new Node(val);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
      this.length++;
      return this;
    }

    traverse(count) {
      let currentNode = this.head;
      for (let i = 0; i < count - 1; i++) {
        currentNode = currentNode.next;
      }
      return currentNode
    }

    pop() {
      if (!this.length) {
        return undefined
      }
      this.tail = this.traverse(this.length - 1); // 2nd to last, new tail
      let popped;
      this.tail.next ? (popped = this.tail.next) : (popped = this.tail);
      this.tail.next = null;
      this.length--;
      if (!this.length) {
        this.head = this.tail = null;
      }
      return popped;
    }

    shift() {
      if (!this.length) {
        return undefined
      }
      const shifted = this.head;
      this.head = this.head.next;
      this.length--;
      if (!this.length) {
        this.tail = null;
      }
      return shifted;
    }

    unshift(value) {
      const newNode = new Node(value);
      if (!this.length) {
        this.head = this.tail = newNode
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
    }

    get(index) {
      if (index < 0 || index > this.length - 1) {
        return undefined;
      }
      return this.traverse(index + 1);
    }
  }

  const list = new SinglyLinkedList();
  list.push('andre');
  list.push('gao');
  // console.log(list.traverse(2))
  list.push('joanna');
  // list.push('xu');
  // console.log(list);
  // console.log(list.get(0));
  // console.log(list.pop());
  // console.log(list);
}

{
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }

  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    push(value) {
      const node = new Node(value);
      if (this.tail) {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      } else {
        this.head = this.tail = node;
      }

      this.length++;
      return this;
    }

    pop() {
      if (this.length === 0) {
        return undefined;
      }
      const oldTail = this.tail;
      if (this.length === 1) {
        this.head = this.tail = null;
      } else {
        const newTail = this.tail.prev;
        newTail.next = null;
        this.tail = newTail;
      }
      this.length--;
      oldTail.prev = null;
      return oldTail;
    }

    shift() {
      if (this.length === 0) {
        return undefined;
      }
      const oldHead = this.head;
      if (this.length === 1) {
        this.head = this.tail = null;
      } else {
        this.head = oldHead.next;
        this.head.prev = null;
      }
      this.length--;
      oldHead.next = null;
      return oldHead;
    }

    unshift(value) {
      const node = new Node(value);
      if (this.length === 0) {
        this.head = this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
      this.length++;
      return this;
    }
  }

  const list = new DoublyLinkedList();
  list.push(1);
  list.push(2);
  list.push(3);
  // list.pop();
  list.shift();
  console.log(list);
}
