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
      if (arr[pointer] > n) { // move pointer left
        tail = pointer - 1;
        pointer = getMidIndex(head, pointer);
      } else {
        head = pointer + 1; // move pointer right
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
          console.log(arr);

        }
      }
      if (!swapped) {
        return arr; // short circuit
      }
    }
    return arr;
  };

  console.log(bubbleSort([5, 9, 3, 1, 0, 6, 10, 8, 7])); // optimized for almost sorted
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
        // console.log(`index = ${i}`, arr[j], arr[j - 1]);
        // console.log('before', arr);
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        // console.log('after', arr);
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
    // only one of the two if statements can be true
    if (i !== a.length) { // handle left over elements in array a
      result = result.concat(a.slice(i));
    }
    if (j !== b.length) { // handle left over elements in array b
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

{
  //radix sort

  const getDigitMath = (num, index) => {
    num = Math.abs(num);
    const temp = 10 ** (index + 1);
    const temp2 = 10 ** index;
    return Math.floor((num % temp) / temp2);
  };

  const getDigitMath2 = (num, index) => {
    num = Math.abs(num);
    const lowered = num / Math.pow(10, index);
    return Math.floor(lowered % 10);
  };

  const digitCount2 = num => {
    if (num === 0) {
      return 1;
    }
    return Math.floor(Math.log10(num)) + 1;
  };

  const getDigit = (num, index) => {
    const s = String(num);
    const sIndex = s.length - 1 - index;
    if (sIndex < 0) {
      return 0;
    }
    return Number(s[sIndex]);
  };

  const digitCount = num => {
    let i = 0;
    while (true) {
      i++;
      if (num <= Math.pow(10, i)) {
        break;
      }
    }
    return i;
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
        buckets[digit] === undefined && (buckets[digit] = []);
        buckets[digit].push(item);
      });
      let iterationResult = [];
      buckets.forEach(item => {
        // forEach method skips empty items
        iterationResult = iterationResult.concat(item);
      });
      arr = iterationResult;
    }
    return arr;
  };

  // console.log(radixSort([71, 4102, 9, 14, 505, 1842, 92, 6]))
}

{
  // linked lists
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
      return currentNode;
    }

    pop() {
      if (!this.length) {
        return undefined;
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
        return undefined;
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
        this.head = this.tail = newNode;
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

    get(index) {
      if (index < 0 || index >= this.length || this.length === 0) {
        return undefined;
      }

      const halfPoint = Math.floor(this.length / 2);
      let pointer;
      let pointerIndex;
      if (index < halfPoint) {
        pointer = this.head;
        pointerIndex = 0;
        while (pointerIndex !== index) {
          pointer = pointer.next;
          pointerIndex++;
        }
      } else {
        pointer = this.tail;
        pointerIndex = this.length - 1;
        while (pointerIndex !== index) {
          pointer = pointer.prev;
          pointerIndex--;
        }
      }
      return pointer.value;
    }
  }

  const list = new DoublyLinkedList();
  list.push(1);
  list.push(2);
  list.push(3);
  // list.pop();
  list.shift();
  // console.log(list);
}

{
  // Binary Search Tree
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  class BST {
    constructor() {
      this.root = null;
    }

    insert(value) {
      const node = new Node(value);
      if (!this.root) {
        this.root = node;
        return this;
      }
      let pointer = this.root;
      /*while (
        (node.value > pointer.value && pointer.right !== null) ||
        (node.value < pointer.value && pointer.left !== null)
        ) {
        pointer = this.traverseOne(node.value, pointer);
      }
      if (node.value > pointer.value) {
        pointer.right = node;
      } else {
        pointer.left = node;
      }*/
      while (true) {
        if (node.value === pointer.value) {
          return undefined;
        }
        if (node.value < pointer.value) {
          if (pointer.left === null) {
            pointer.left = node;
            return this;
          } else {
            pointer = pointer.left;
          }
        } else {
          if (pointer.right === null) {
            pointer.right = node;
            return this;
          } else {
            pointer = pointer.right;
          }
        }
      }
    }

    traverseOne(value, pointer) {
      console.log(value, pointer.value);
      if (value > pointer.value) {
        pointer = pointer.right;
      } else {
        pointer = pointer.left;
      }
      return pointer;
    }

    contains(value) {
      if (!this.root) {
        return false;
      }
      let pointer = this.root;
      /* while (true) {
        if (value === pointer.value) {
          return true;
        }
        if (value > pointer.value) {
          if (pointer.right) {
            pointer = pointer.right
          } else {
            return false;
          }
        } else {
          if (pointer.left) {
            pointer = pointer.left
          } else {
            return false;
          }
        }
      } */
      while (pointer) {
        if (value === pointer.value) {
          return true;
        }
        if (value < pointer.value) {
          pointer = pointer.left;
        } else {
          pointer = pointer.right;
        }
      }
      return false;
    }

    bfs() {
      if (!this.root) return [];
      const result = [];
      const queue = [];
      queue.push(this.root);
      while (queue.length > 0) {
        result.push(queue[0].value);
        queue[0].left && queue.push(queue[0].left);
        queue[0].right && queue.push(queue[0].right);
        queue.shift();
      }
      return result;
    }

    dfsPreOder() {
      let pointer = this.root;
      const result = [];
      traverse(pointer);

      function traverse(node) {
        result.push(node.value);
        node.left && traverse(node.left);
        node.right && traverse(node.right);
      }

      return result;
    }

    dfsPostOrder() {
      let pointer = this.root;
      const result = [];
      traverse(pointer);

      function traverse(node) {
        node.left && traverse(node.left);
        node.right && traverse(node.right);
        result.push(node.value);
      }

      return result;
    }

    dfsInOrder() {
      let pointer = this.root;
      const result = [];
      traverse(pointer);

      function traverse(node) {
        node.left && traverse(node.left);
        result.push(node.value);
        node.right && traverse(node.right);
      }

      return result;
    }
  }

  const bst = new BST();
  bst.insert(8);
  bst.insert(4);
  bst.insert(2);
  bst.insert(3);
  bst.insert(6);
  bst.insert(5);
  bst.insert(7);
  bst.insert(15);
  bst.insert(11);
  bst.insert(20);
  bst.insert(0);
  //           8
  //     4             15
  //  2      6     11       20
  //0  3    5   7
  // console.log(bst.dfsPostOrder());
}

{
  // heaps
  class MaxBinaryHeap {
    constructor() {
      this.heap = [];
    }

    insert(value) {
      this.heap.push(value);
      this.heap.length > 1 && this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(targetIndex) {
      if (targetIndex === 0) {
        return;
      }
      const target = this.heap[targetIndex];
      const parentIndex = Math.floor((targetIndex - 1) / 2);
      const parent = this.heap[parentIndex];
      if (target > parent) {
        this.heap[parentIndex] = target;
        this.heap[targetIndex] = parent;
        this.bubbleUp(parentIndex);
      }
    }

    extractMax() {
      if (this.heap.length === 0) {
        return null;
      }
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      console.log('before bubble down', this.heap);
      this.bubbleDown(0);
      return root;
    }

    bubbleDown(targetIndex) {
      const leftIndex = targetIndex * 2 + 1;
      const rightIndex = targetIndex * 2 + 2;
      const target = this.heap[targetIndex];
      const left = this.heap[leftIndex];
      const right = this.heap[rightIndex];
      let complete = false;
      left === undefined && right === undefined && (complete = true);
      left === undefined && target > right && (complete = true);
      right === undefined && target > left && (complete = true);
      target > left && target > right && (complete = true);
      if (complete) return;

      if (left > target || right > target) {
        if (left !== undefined && right !== undefined && left > right) {
          // swap with left child
          this.heap[leftIndex] = target;
          this.heap[targetIndex] = left;
          this.bubbleDown(leftIndex);
        } else if (left !== undefined && right !== undefined && left < right) {
          // swap with right child
          this.heap[rightIndex] = target;
          this.heap[targetIndex] = right;
          this.bubbleDown(rightIndex);
        } else if (left === undefined) {
          // swap with right
          this.heap[rightIndex] = target;
          this.heap[targetIndex] = right;
          this.bubbleDown(rightIndex);
        } else {
          // swap with left
          this.heap[leftIndex] = target;
          this.heap[targetIndex] = left;
          this.bubbleDown(leftIndex);
        }
      }
    }
  }

  const mbh = new MaxBinaryHeap();
  mbh.insert(50);
  mbh.insert(20);
  mbh.insert(10);
  mbh.insert(30);
  mbh.insert(60);
  // console.log(mbh.extractMax());
  // console.log(mbh.extractMax());
  // console.log(mbh.extractMax());
  // console.log(mbh.heap);
}

{
  //hash table
  class HashTable {
    constructor(size = 53) {
      this.hashMap = new Array(size);
    }

    _hash(value) {
      let result = 0;
      const PRIME = 31;
      for (let i = 0; i < Math.min(value.length, 100); i++) {
        const charCode = value[i].charCodeAt(0) - 96;
        result = (result * PRIME + charCode) % this.hashMap.length;
      }
      return result;
    }

    set(key, value) {
      const index = this._hash(key);
      if (this.hashMap[index] === undefined) {
        this.hashMap[index] = [];
      }
      // if key exist, replace value
      let existingData = this.hashMap[index].find(item => item[0] === key);
      if (existingData) {
        return (existingData[1] = value);
      }
      this.hashMap[index].push([key, value]);
    }

    get(key) {
      const index = this._hash(key);
      let result;
      if (this.hashMap[index]) {
        result = this.hashMap[index].find(item => item[0] === key);
      }
      return result ? result[1] : result;
    }

    keys() {
      const result = [];
      this.hashMap.forEach(items => {
        items.forEach(item => result.push(item[0]));
      });
      return result;
    }

    values() {
      //unique values
      const result = {};
      this.hashMap.forEach(items => {
        items.forEach(item => (result[item[1]] = true));
      });
      return Object.keys(result);
    }
  }

  const ht = new HashTable(5);
  ht.set('man', 'andre');
  ht.set('man', 'gao');
  ht.set('women', 'joanna');
  ht.set('child', 'ellie');
  ht.set('baby', 'ellie');
  // console.log(ht.get('man'));
  // console.log(ht.get('horse'));
  // console.log(ht.keys());
  // console.log(ht.values());
}

{
  //graph
  class Graph {
    constructor() {
      this.adjacencyList = {
        a: ['b', 'c'],
        b: ['a', 'd'],
        c: ['a', 'e'],
        d: ['b', 'e', 'f'],
        e: ['c', 'd', 'f'],
        f: ['d', 'e']
      };
    }

    addVertex(name) {
      if (!this.adjacencyList[name]) {
        this.adjacencyList[name] = [];
      } else {
        return null;
      }
    }

    addEdge(a, b) {
      !this.adjacencyList[a] && (this.adjacencyList[a] = []);
      !this.adjacencyList[b] && (this.adjacencyList[b] = []);
      this.adjacencyList[a].push(b);
      this.adjacencyList[b].push(a);
    }

    removeEdge(a, b) {
      this.adjacencyList[a] = this.adjacencyList[a].filter(v => v !== b);
      this.adjacencyList[b] = this.adjacencyList[b].filter(v => v !== a);
    }

    removeVertex(name) {
      this.adjacencyList[name].forEach(v => {
        this.removeEdge(name, v);
      });
      this.adjacencyList = Object.keys(this.adjacencyList).reduce(
        (acc, curr) => {
          if (curr !== name) {
            acc[curr] = this.adjacencyList[curr];
          }
          return acc;
        },
        {}
      );
    }

    dfsRecursive(name) {
      const result = [name];
      const visited = { [name]: true };

      const helper = name => {
        this.adjacencyList[name].forEach(v => {
          if (!visited[v]) {
            result.push(v);
            visited[v] = true;
            helper(v);
          }
        });
      };

      helper(name);
      return result;
    }

    dfsIterative(name) {
      const stack = [name];
      const result = [];
      const visited = {};
      while (stack.length) {
        const current = stack.pop();
        if (!visited[current]) {
          result.push(current);
          visited[current] = true;
          this.adjacencyList[current].forEach(v => stack.push(v));
        }
      }
      return result;
    }

    bfsRecursive(name) {
      const result = [name];
      const visited = { [name]: true };

      const helper = v => {
        const arr = [];
        this.adjacencyList[v].forEach(n => {
          if (!visited[n]) {
            result.push(n);
            arr.push(n);
            visited[n] = true;
          }
        });
        arr.forEach(item => helper(item));
      };
      helper(name);
      return result;
    }

    bfsIterative(name) {
      const result = [];
      const queue = [name];
      const visited = {};
      while (queue.length) {
        const current = queue.shift();
        if (!visited[current]) {
          result.push(current);
          visited[current] = true;
          this.adjacencyList[current].forEach(v => queue.push(v));
        }
      }
      return result;
    }
  }

  const g = new Graph();
  // g.removeVertex('a');
  // console.log(g.bfsRecursive('a'));
}

{
  //weighted graph
  class WeightedGraph {
    constructor() {
      this.adjacencyList = {};
    }

    addVertex(value) {
      if (!this.adjacencyList[value]) {
        this.adjacencyList[value] = [];
      }
    }

    addEdge(a, b, weight) {
      this.adjacencyList[a].push({ name: b, weight });
      this.adjacencyList[b].push({ name: a, weight });
    }

    dijkstra(start, end) {
      const pq = new MinBinaryHeap();
      pq.insert(start, 0);
      const distances = { [start]: 0 };
      const previous = { [start]: null };
      const visited = {};
      const result = [];
      while (pq.heap.length) {
        const current = pq.extractMin();
        console.log('current:', current);
        if (current.name === end) {
          let pointer = end;
          while (pointer !== null) {
            result.push(pointer);
            pointer = previous[pointer];
          }
          result.reverse();
          break;
        }
        this.adjacencyList[current.name].forEach(neighbor => {
          console.log('neighbor:', neighbor);
          if (!visited[neighbor.name]) {
            const distance = distances[current.name] + neighbor.weight;
            // if statement ignores path with more weight
            if (distance < (distances[neighbor.name] || Infinity)) {
              pq.insert(neighbor.name, distance);
              distances[neighbor.name] = distance;
              previous[neighbor.name] = current.name;
              console.log('distances', distances, '| previous', previous);
            }
          }
        });
        visited[current.name] = true;
      }
      console.log('final', distances, previous, visited);
      return result;
    }
  }

  class MinBinaryHeap {
    constructor() {
      this.heap = [];
    }

    insert(name, weight) {
      this.heap.push({ name, weight });
      this.heap.length > 1 && this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(targetIndex) {
      if (targetIndex === 0) {
        return;
      }
      const target = this.heap[targetIndex];
      const parentIndex = Math.floor((targetIndex - 1) / 2);
      const parent = this.heap[parentIndex];
      if (target.weight < parent.weight) {
        this.heap[parentIndex] = target;
        this.heap[targetIndex] = parent;
        this.bubbleUp(parentIndex);
      }
    }

    extractMin() {
      if (this.heap.length === 0) {
        return null;
      }
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      console.log('before bubble down', this.heap);
      this.bubbleDown(0);
      return root;
    }

    bubbleDown(targetIndex) {
      const leftIndex = targetIndex * 2 + 1;
      const rightIndex = targetIndex * 2 + 2;
      const target = this.heap[targetIndex];
      const left = this.heap[leftIndex];
      const right = this.heap[rightIndex];
      let complete = false;
      left === undefined && right === undefined && (complete = true);
      left === undefined &&
        right !== undefined &&
        target.weight < right.weight &&
        (complete = true);
      right === undefined &&
        left !== undefined &&
        target.weight < left.weight &&
        (complete = true);
      left !== undefined &&
        target.weight < left.weight &&
        right !== undefined &&
        target.weight < right.weight &&
        (complete = true);
      if (complete) return;

      if (left.weight < target.weight || right.weight < target.weight) {
        if (
          left !== undefined &&
          right !== undefined &&
          left.weight < right.weight
        ) {
          // swap with left child
          this.heap[leftIndex] = target;
          this.heap[targetIndex] = left;
          this.bubbleDown(leftIndex);
        } else if (left !== undefined && right !== undefined && left > right) {
          // swap with right child
          this.heap[rightIndex] = target;
          this.heap[targetIndex] = right;
          this.bubbleDown(rightIndex);
        } else if (left === undefined) {
          // swap with right
          this.heap[rightIndex] = target;
          this.heap[targetIndex] = right;
          this.bubbleDown(rightIndex);
        } else {
          // swap with left
          this.heap[leftIndex] = target;
          this.heap[targetIndex] = left;
          this.bubbleDown(leftIndex);
        }
      }
    }
  }

  const wg = new WeightedGraph();
  wg.addVertex('A');
  wg.addVertex('B');
  wg.addVertex('C');
  wg.addVertex('D');
  wg.addVertex('E');
  wg.addVertex('F');

  wg.addEdge('A', 'B', 4);
  wg.addEdge('A', 'C', 2);
  // wg.addEdge('B', 'E', 1);
  wg.addEdge('B', 'E', 3);
  wg.addEdge('C', 'D', 2);
  wg.addEdge('C', 'F', 4);
  wg.addEdge('D', 'E', 3);
  wg.addEdge('D', 'F', 1);
  wg.addEdge('E', 'F', 1);
  // wg.addEdge('E', 'F', 2);

  // console.log(wg.dijkstra('A', 'E'));
}

{
  //Dynamic Programming
  const fibonacci = num => {
    const calculated = [null, 1, 1];
    const helper = n => {
      if (calculated[n]) return calculated[n];
      calculated[n] = helper(n - 1) + helper(n - 2);
      return calculated[n];
    };
    return helper(num);
  };

  const fibonacciSingleFunction = (num, calculated = []) => {
    if (calculated[num]) return calculated[num];
    if (num <= 2) return 1;
    calculated[num] =
      fibonacciSingleFunction(num - 1, calculated) +
      fibonacciSingleFunction(num - 2, calculated);
    return calculated[num];
  };

  const fibonacciOptimized = n => {
    const calculated = [null, 1, 1];
    for (let i = 3; i <= n; i++) {
      calculated[i] = calculated[i - 2] + calculated[i - 1];
    }
    return calculated[n];
  };

  // console.log(fibonacci(6));
  // console.log(fibonacciOptimized(100));
}
