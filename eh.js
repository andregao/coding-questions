{
  //tree
  class Node {
    constructor(value) {
      this.value = value;
      this.neighbors = [];
    }

    addChild(value) {
      const node = new Node(value);
      this.neighbors.push(node);
      return node;
    }
  }

  class Tree {
    constructor(rootValue) {
      this.root = new Node(rootValue);
    }

    traverse(visitFn, node = this.root, depth = 0) {
      visitFn(node, depth);
      node.neighbors.forEach(n => this.traverse(visitFn, n, depth + 1));
    }

    printTree() {
      let result = '';
      const updateResult = (node, level) => {
        if (node === this.root) {
          result = node.value;
        } else {
          result += `\n${'  '.repeat(level)}- ${node.value}`;
        }
        node.neighbors.forEach(n => updateResult(n, level + 1));
      };

      updateResult(this.root, 0);
      return result;
    }
  }

  const dom = new Tree('html');
  const head = dom.root.addChild('head');
  const body = dom.root.addChild('body');
  const title = head.addChild('title - example tree structure');
  const header = body.addChild('header');
  const h1 = header.addChild('h1 - tree example');
  const main = body.addChild('main');
  const p = main.addChild('p - build a basic tree');
  const footer = body.addChild('footer');
  const copyright = footer.addChild(
    'copyright - free for all' + new Date().getFullYear()
  );

  const myPrint = (node, depth) => {
    console.log(`${'  '.repeat(depth)}| ${node.value}`);
  };
  // dom.traverse(myPrint);
  // console.log(dom.printTree());
}

{
  // bubble sort without nested loops
  const bubbleSort = target => {
    let swapped = true;
    while (swapped) {
      swapped = false;
      target.forEach((n, i) => {
        if (n > target[i + 1]) {
          [target[i], target[i + 1]] = [target[i + 1], target[i]];
          swapped = true;
        }
        console.log('in loop', target);
      });
    }
    return target;
  };
  const target = [5, 9, 3, 1, 0, 6, 10, 8, 7];
  // console.log(bubbleSort(target));
}

{
  //merge sort simplified
  const mergeSort = array => {
    if (array.length <= 1) {
      return array;
    }
    const middleIndex = Math.floor(array.length / 2);
    return merge(
      mergeSort(array.slice(0, middleIndex)),
      mergeSort(array.slice(middleIndex))
    );
  };
  const merge = (a, b) => {
    const sorted = [];
    while (a[0] !== undefined && b[0] !== undefined) {
      let current;
      if (a[0] < b[0]) {
        current = a.shift();
      } else {
        current = b.shift();
      }
      sorted.push(current);
    }
    const result = [...sorted, ...a, ...b];
    console.log('sorted', result);
    return result;
  };
  const target = [5, 9, 3, 1, 0, 6, 10, 8, 7];
  // console.log(mergeSort(target));
}

{
  //quick sort simplified
  const quickSort = arr => {
    console.log(arr);
    if (arr.length <= 1) {
      return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [],
      right = [];
    for (let i = 0; i < arr.length - 1; i++) {
      const current = arr[i];
      if (current < pivot) {
        left.push(current);
      } else {
        right.push(current);
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  };
  const target = [5, 9, 3, 1, 0, 6, 10, 8, 7];
  // console.log(quickSort(target));
}

{
  // knapsack
  const rope = { value: 1500, weight: 1 };
  const tent = { value: 3000, weight: 4 };
  const food = { value: 2000, weight: 3 };
  const knife = { value: 4000, weight: 1 };
  const book = { value: 1000, weight: 1 };
  const candle = { value: 6000, weight: 1 };

  const allItems = [rope, tent, food, knife, book, candle];

  const knapsackRecursive = (items, totalWeight) => {
    // initialize
    const memoGrid = [];
    items.forEach(() => memoGrid.push([]));

    // helper function to access grid and return result value
    const helper = (itemIndex, capacity) => {
      // base cases
      if (itemIndex >= items.length || capacity === 0) {
        return 0;
      }
      if (memoGrid[itemIndex][capacity] !== undefined) {
        // console.log('HIT', itemIndex, capacity, memoGrid[itemIndex][capacity]);
        return memoGrid[itemIndex][capacity];
      }

      // recursive cases
      const { weight, value } = items[itemIndex];
      // skip to next item if current item weights more than capacity allows
      if (weight > capacity) {
        return helper(itemIndex + 1, capacity);
      }
      // if putting the current item in
      const value1 = value + helper(itemIndex + 1, capacity - weight);
      // if not putting it in
      const value2 = helper(itemIndex + 1, capacity);
      // console.log(weight, value, capacity);
      // console.log('v1, v2', value1, value2);
      const result = Math.max(value1, value2);
      memoGrid[itemIndex][capacity] = result;
      return result;
    };

    const result = helper(0, totalWeight);
    console.log(memoGrid);
    return result;
  };

  const knapsackIterative = (items, totalWeight) => {
    // initialize grid
    const grid = [];
    for (let i = 0; i <= items.length; i++) {
      grid.push([0]);
    }
    for (let i = 0; i <= totalWeight; i++) {
      grid[0][i] = 0;
    }
    // console.log(grid);

    items.forEach((item, index) => {
      const itemNum = index + 1;
      const { value, weight: itemWeight } = item;
      for (let currentCapacity = 1; currentCapacity <= totalWeight; currentCapacity++) {
        // console.log('current capacity', capacity);
        if (itemWeight > currentCapacity) { // leave item out
          grid[itemNum][currentCapacity] = grid[itemNum - 1][currentCapacity];
          // console.log('overweight item:', itemNum);
          // console.log(grid);
        } else {
          // first case: put item in
          const value1 = value + grid[itemNum - 1][currentCapacity - itemWeight];
          // second case: leave item out
          const value2 = grid[itemNum - 1][currentCapacity];
          // console.log('v1, v2', value1, value2);
          grid[itemNum][currentCapacity] = value1 > value2 ? value1 : value2;
          // console.log(grid);
        }
      }
    });
    console.log(grid);
    return grid[items.length][totalWeight];
  };
  // console.log(knapsackRecursive(allItems, 4));
  console.log(knapsackIterative(allItems, 4));
}
