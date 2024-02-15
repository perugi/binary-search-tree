const BinarySearchTree = require('./BinarySearchTree');

function generateRandomNumbers(minValue, maxValue, n) {
  const numbers = [];
  for (let i = 0; i < n; i++) {
    numbers.push(
      Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
    );
  }

  return numbers;
}

const bst = new BinarySearchTree();
bst.buildTree(generateRandomNumbers(1, 99, 20));
console.log('Initializing tree with 20 random integers < 100:');
bst.prettyPrint();
console.log(`Tree is balanced: ${bst.isBalanced()}`);
console.log(`level-order: ${bst.levelOrder()}`);
console.log(`pre-order: ${bst.preOrder()}`);
console.log(`post-order: ${bst.postOrder()}`);
console.log(`in-order: ${bst.inOrder()}`);

const randomHighIntegers = generateRandomNumbers(100, 150, 5);
randomHighIntegers.forEach((integer) => bst.insert(integer));
console.log('Unbalancing tree by inserting some high numbers:');
bst.prettyPrint();
console.log(`Tree is balanced: ${bst.isBalanced()}`);

console.log('Rebalancing tree:');
bst.rebalance();
bst.prettyPrint();
console.log(`Tree is balanced: ${bst.isBalanced()}`);
console.log(`level-order: ${bst.levelOrder()}`);
console.log(`pre-order: ${bst.preOrder()}`);
console.log(`post-order: ${bst.postOrder()}`);
console.log(`in-order: ${bst.inOrder()}`);
