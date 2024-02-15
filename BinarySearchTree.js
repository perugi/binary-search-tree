const Node = require('./Node');

class BinarySearchTree {
  #root;

  constructor() {
    this.#root = null;
  }

  get root() {
    return this.#root;
  }

  buildTree(array) {
    const arrayNoDupes = [...new Set(array)];
    arrayNoDupes.sort((a, b) => a - b);

    this.#root = this.createBST(arrayNoDupes, 0, arrayNoDupes.length - 1);

    return this.#root;
  }

  createBST(array, start, end) {
    if (start > end) {
      return null;
    }

    const mid = Math.floor((start + end) / 2);
    const root = new Node(array[mid]);

    root.left = this.createBST(array, start, mid - 1);
    root.right = this.createBST(array, mid + 1, end);

    return root;
  }

  prettyPrint(node = this.#root, prefix = '', isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? '│   ' : '    '}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

  insert(value, node = this.#root) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.data) {
      node.left = this.insert(value, node.left);
    } else if (value > node.data) {
      node.right = this.insert(value, node.right);
    }

    return node;
  }

  delete(value, node = this.#root) {
    if (node === null) {
      return null;
    }

    // Keep looking for the node with the specified value
    if (value < node.data) {
      node.left = this.delete(value, node.left);
      return node;
    }
    if (value > node.data) {
      node.right = this.delete(value, node.right);
      return node;
    }

    // The node has been found, delete it by returning its child (or null if it's a leaf)
    // to be connected to the parent.
    if (node.left === null) {
      return node.right;
    }
    if (node.right === null) {
      return node.left;
    }

    // If both children exist, it's a bit more complicated
    // Start by finding the successor (next in-order value) by looking for
    // the left - most node of the right subtree.
    let successorParent = node;
    let successor = node.right;
    while (successor.left !== null) {
      successorParent = successor;
      successor = successor.left;
    }

    // Delete the successor node (since it's always the left child of its parent,
    // we can just replace its parents left node with its right node).
    if (successorParent !== node) {
      successorParent.left = successor.right;
    } else {
      // In the case the successor is the right child of the node we are removing,
      // we delete it just by setting the node's right child to the successor's right.
      node.right = successor.right;
    }

    // Copy the successor nodes data over the node we are removing.
    node.data = successor.data;
    return node;
  }

  find(value, node = this.#root) {
    if (node === null) {
      return null;
    }

    if (value < node.data) {
      return this.find(value, node.left);
    }
    if (value > node.data) {
      return this.find(value, node.right);
    }

    return node;
  }

  levelOrder(callback) {
    if (callback) {
      if (!this.#root) return undefined;

      const nodeQueue = [this.#root];

      while (nodeQueue.length !== 0) {
        const processedNode = nodeQueue.shift();
        callback(processedNode);
        if (processedNode.left) nodeQueue.push(processedNode.left);
        if (processedNode.right) nodeQueue.push(processedNode.right);
      }

      return undefined;
    }

    if (!this.#root) return [];

    const nodeQueue = [this.#root];
    const values = [];

    while (nodeQueue.length !== 0) {
      const processedNode = nodeQueue.shift();
      values.push(processedNode.data);
      if (processedNode.left) nodeQueue.push(processedNode.left);
      if (processedNode.right) nodeQueue.push(processedNode.right);
    }

    return values;
  }

  inOrder(callback, node = this.#root) {
    if (callback) {
      if (node === null) return undefined;

      this.inOrder(callback, node.left);
      callback(node);
      this.inOrder(callback, node.right);

      return undefined;
    }

    if (node === null) return [];

    let values = [];
    values = values.concat(this.inOrder(callback, node.left));
    values.push(node.data);
    values = values.concat(this.inOrder(callback, node.right));

    return values;
  }

  preOrder(callback, node = this.#root) {
    if (callback) {
      if (node === null) return undefined;

      callback(node);
      this.inOrder(callback, node.left);
      this.inOrder(callback, node.right);

      return undefined;
    }

    if (node === null) return [];

    let values = [];
    values.push(node.data);
    values = values.concat(this.inOrder(callback, node.left));
    values = values.concat(this.inOrder(callback, node.right));

    return values;
  }

  postOrder(callback, node = this.#root) {
    if (callback) {
      if (node === null) return undefined;

      this.inOrder(callback, node.left);
      this.inOrder(callback, node.right);
      callback(node);

      return undefined;
    }

    if (node === null) return [];

    let values = [];
    values = values.concat(this.inOrder(callback, node.left));
    values = values.concat(this.inOrder(callback, node.right));
    values.push(node.data);

    return values;
  }

  height(node) {
    if (node === null) return -1;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return leftHeight >= rightHeight ? leftHeight + 1 : rightHeight + 1;
  }
}

module.exports = BinarySearchTree;
