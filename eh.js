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
    const left = [], right = [];
    for (let i = 0; i < arr.length - 1; i++) {
      const current = arr[i];
      if (current < pivot) {
        left.push(current)
      } else {
        right.push(current)
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  };
  const target = [5, 9, 3, 1, 0, 6, 10, 8, 7];
  // console.log(quickSort(target));
}
