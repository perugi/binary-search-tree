# Binary Search Tree

A practice implementation of a Binary Search Tree in JavaScript as an ES6 Class, based on the specifications at: https://www.theodinproject.com/lessons/javascript-binary-search-trees.

## Usage

```js
const bst = new BinarySearchTree();
bst.buildTree([1, 7, 4, 24, 8, 7]);
console.log(bst.inOrder()); // [ 1, 4, 7, 8, 24]
```

## Methods

The following public class methods are implemented:

- `buildTree(array)` takes an array of data (e.g., `[1, 7, 4, 24, 8, 7]`) and turns it into a balanced binary tree of Node objects.
- `prettyPrint(node)` prints the tree, with the rootat the specified nod, in the console. If no node is passed, it prints the complete tree.
- `insert(value)` inserts the given value into a proper position in the tree (warning, the tree can become unbalanced as a result).
- `delete(value)` delete the given value from the tree (warning, the tree can become unbalanced as a result).
- `find(value)` return the node with the given value.
- `levelOrder(callback)` traverses the tree in breadth-first level order and provides each node as an argument to the callback. If no callback is given, the method return an array of values in level order.
- `inOrder(callback)` traverses the tree in depth-first in-order and provides each node as an argument to the callback. If no callback is given, the method return an array of values in in-order.
- `preOrder(callback)` traverses the tree in depth-first pre-order and provides each node as an argument to the callback. If no callback is given, the method return an array of values in pre-order.
- `postOrder(callback)` traverses the tree in depth-first post-order and provides each node as an argument to the callback. If no callback is given, the method return an array of values in post-order.
- `height(node)` returns the given node's height, defined as the number of edges in the longest path from a given node to a leaf node.
- `depth(node)` return the given node's depth, defined as the number of edges in the path from a given node to the tree's root node.
- `isBalanced()` returns true if the tree is balanced.
- `rebalance()` rebalances an unbalanced tree.
