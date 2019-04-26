class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.root) { // if tree is empty
      return this.root = node;
    }
    let current = this.root;
    while (true) { //traverse
      if (value < current.value) {
        if (current.left) {
          current = current.left
        } else {
          current.left = node;
          return;
        }
      } else {
        if (current.right) {
          current = current.right
        } else {
          current.right = node;
          return;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return null;
    }
    let current = this.root;
    // while (true) {
    //   if (value === current.value) { // found
    //     return current;
    //   }
    //
    //   if (value < current.value) {
    //     if (current.left) {
    //       current = current.left;
    //     } else {
    //       return null
    //     }
    //   } else {
    //     if (current.right) {
    //       current = current.right;
    //     } else {
    //       return null
    //     }
    //   }
    // }
    while (current) { // traverse until the end
      if (value === current.value) {
        return current;
      } else {
        value < current.value
          ? current = current.left
          : current = current.right
      }
    }
    return null
  }

  remove(value) {
    // search for node
    if (!this.root) {
      return null;
    }
    let current = this.root;
    let parent, isLessThanParent;
    while (current) { // traverse until the end
      if (value === current.value) {
        break; // found current
      } else {
        parent = current; // move on to a child
        if (value < current.value) {
          current = current.left;
          isLessThanParent = true;
        } else {
          current = current.right;
          isLessThanParent = false;
        }
      }
    }

    // if value not found
    if (!current) {
      return null;
    }

    // if no child, delete
    if (!current.left && !current.right) {
      return assignNodeToParent(null, parent, isLessThanParent)
    }
    // if one child, bypass
    if (!current.left || !current.right) {
      return current.left
        ? assignNodeToParent(current.left, parent, isLessThanParent)
        : assignNodeToParent(current.right, parent, isLessThanParent);
    }
    // if two children, replace with successor
    // find successor
    let successor = current.right;
    if (!successor.left) {
      return successor.left = current.left;
    }
    let successorParent;
    while (successor.left) { //traverse when successor has left child
      successorParent = successor;
      successor = successor.left;
    }
    // replace with successor
    successor.right
      ? successorParent.left = successor.right
      : successorParent.left = null;

    successor.left = current.left;
    successor.right = current.right;
    assignNodeToParent(successor, parent, isLessThanParent);
  }
}

function assignNodeToParent(node, parent, isLessThanParent) {
  isLessThanParent
    ? parent.left = node
    : parent.right = node;
}

const traverse = node => {
  const tree = {value: node.value};
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
};

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(7);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.insert(5);
tree.insert(8);
tree.remove(4);
console.log(tree.root);

