// Root - The top node in a tree.
// Child -A node directly connected to another node when moving away from the Root.
// Parent - The converse notion of a child.
// Siblings -A group of nodes with the same parent.
// Descendant - A node reachable by repeated proceeding from parent to child.
// Ancestor - A node reachable by repeated proceeding from child to parent.
// Leaf - A node with no children.
// Edge - The connection between one node and another.
// Path -A sequence of nodes and edges connecting a node with a descendant.
// Level - The level of a node is defined by 1 + (the number of connections between the node and the root).
// Height of node - The height of a node is the number of edges on the longest path between that node and a descendant leaf.
// Height of tree- The height of a tree is the height of its root node.
// Depth - The depth of a node is the number of edges from the tree's root node to the node.

// Binary Tree is a tree in which each node has at most two children. A binary search tree is a special kind of tree where each node is in a sorted order: all nodes to the left of a given node must have values less than the given node's value, and all nodes to the right of a given node must have values greater than the given node's value.

// Binary search trees have impressive performance characteristics since all operations can be done in O(log(n)) time on average. However, this is not always the case if a tree is unbalanced (more nodes on one side than another). The worst case runtime for a BST can be O(n) if a tree is completely unbalanced (there are much more complex data structures like AVL and Red-Black Trees which balance themselves to prevent these kinds of issues).

// Operation Average Runtime
// search  O(log(n))
// insert  O(log(n))
// delete  O(log(n))
// space complexity  O(n)

// Create two constructor functions, one for a Node and another for a BinarySearchTree

// Node
// - should accept a parameter and contain a property called value which is initialized to the parameter passed to the function
// - should contain a property called left which is initialized to null
// - should contain a property called right which is initialized to null

// BinarySearchTree
// - should contain a property called root which is initialized to null

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

// Implement the following functions on the BinarySearchTree.prototype

// insertIteratively
// This function should insert a node in a binary tree. It should return the BinarySearchTree and  should be solved using iteration.

BinarySearchTree.prototype.insertIteratively = function(value) {
  if (!Number.isFinite(value)) return "Please enter a number";
  let newNode = new Node(value);
  if (!this.root) this.root = newNode;
  else {
    let curr = this.root;
    while (curr !== newNode) {
      if (value < curr.value) {
        if (!curr.left) curr.left = newNode;
        curr = curr.left;
      } else if (value > curr.value) {
        if (!curr.right) curr.right = newNode;
        curr = curr.right;
      } else return "Duplicate value";
    }
  }
  return this;
};

BinarySearchTree.prototype.insertRecursively = function(val, curr = this.root) {
  if (!Number.isFinite(val)) return "Please enter a number";
  if (!this.root) {
    this.root = new Node(val);
    return this;
  }
  if (val < curr.value) {
    if (!curr.left) {
      curr.left = new Node(val);
      return this;
    }
    return this.insertRecursively(val, curr.left);
  } else if (val > curr.value) {
    if (!curr.right) {
      curr.right = new Node(val);
      return this;
    }
    return this.insertRecursively(val, curr.right);
  } else return "Duplicate Value";
};

// findIteratively
// This function should find a node in a binary tree. It should return the node if found, otherwise return `undefined`. This should be solved using iteration. The tests for this method assume that insertIteratively has been implemented correctly.

BinarySearchTree.prototype.findIteratively = function(value) {
  if (!Number.isFinite(value)) return "Please enter a number";
  if (!this.root) return undefined;
  let curr = this.root;
  while (value !== curr.value) {
    if (value < curr.value) {
      if (!curr.left) return undefined;
      curr = curr.left;
    } else {
      if (!curr.right) return undefined;
      curr = curr.right;
    }
  }
  return curr;
};

BinarySearchTree.prototype.findIteratively = function(value) {
  if (!Number.isFinite(value)) return "Please enter a number";
  if (!this.root) return undefined;
  let curr = this.root;
  while (curr) {
    if (value === curr.value) return curr;
    if (value < curr.value) curr = curr.left;
    else curr = curr.right;
  }
  return undefined;
};

// findRecursively
// This function should find a node in a binary tree. It should return the node if found, otherwise return `undefined`. This should be solved using recursion. The tests for this method assume that insertIteratively has been implemented correctly.

BinarySearchTree.prototype.findRecursively = function(val, curr = this.root) {
  if (!Number.isFinite(val)) return "Please enter a number";
  if (!curr) return undefined;
  if (val === curr.value) return curr;
  if (val < curr.value) return this.findRecursively(val, curr.left);
  else return this.findRecursively(val, curr.left);
};

// toArray
// This function should convert a binary search tree into an array of nodes from smallest to largest. The tests for this method assume that insertIteratively has been implemented correctly.

BinarySearchTree.prototype.toArray = function(node = this.root) {
  if (!node) return [];
  if (!node.left && !node.right) return [node.value];
  return this.toArray(node.left).concat([node.value], this.toArray(node.right));
};

BinarySearchTree.prototype.toArray = function(node = this.root) {
  let arr = [];
  if (!node) return arr;
  if (node.left) arr = arr.concat(this.toArray(node.left));
  arr.push(node.value);
  if (node.right) arr = arr.concat(this.toArray(node.right));
  return arr;
};

// DFSPreOrder
// This function should search through each node in the binary search tree using pre-order depth first search and return an array containing each node's value.
// Start at the root node
// Check the value of the current node; if it has a value, record it
// Recursively call the pre-order function on the subtree to the left of the current node
// Recursively call the pre-order function on the subtree to the right of the current node

BinarySearchTree.prototype.DFSPreOrder = function(node = this.root) {
  if (!node) return [];
  return [node.value].concat(
    this.DFSPreOrder(node.left),
    this.DFSPreOrder(node.right)
  );
};

BinarySearchTree.prototype.DFSPreOrder = function() {
  let res = [];
  let curr = this.root;
  function traverse(node) {
    res.push(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(curr);
  return res;
};

// DFSInOrder
// This function should search through each node in the binary search tree using in-order depth first search and return an array containing each node's value.
// Start at the root node
// Recursively call the pre-order function on the subtree to the left of the current node
// Check the value of the current node; if it has a value, record it
// Recursively call the pre-order function on the subtree to the right of the current node

BinarySearchTree.prototype.DFSInOrder = function(node = this.root) {
  if (!node) return [];
  return this.DFSInOrder(node.left).concat(
    [node.value],
    this.DFSInOrder(node.right)
  );
};

BinarySearchTree.prototype.DFSInOrder = function() {
  let res = [];
  let curr = this.root;
  function traverse(node) {
    if (node.left) traverse(node.left);
    res.push(node.value);
    if (node.right) traverse(node.right);
  }
  traverse(curr);
  return res;
};

// DFSPostOrder
// This function should search through each node in the binary search tree using post-order depth first search and return an array containing each node's value.
// Start at the root node
// Recursively call the pre-order function on the subtree to the left of the current node
// Recursively call the pre-order function on the subtree to the right of the current node
// Check the value of the current node; if it has a value, record it

BinarySearchTree.prototype.DFSPostOrder = function(node = this.root) {
  if (!node) return [];
  return this.DFSPostOrder(node.left).concat(this.DFSPostOrder(node.right), [
    node.value
  ]);
};

BinarySearchTree.prototype.DFSPostOrder = function() {
  let res = [];
  let curr = this.root;
  function traverse(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    res.push(node.value);
  }
  traverse(curr);
  return res;
};

// breadthFirstSearch
// This function should search through each node in the binary search tree using breadth first search and return an array containing each node's value.
// start at the root
// place the root node in a queue
// while there is anything in the queue
// remove the first element in the queue (dequeue)
// if what has been dequeued has a left node
// enqueue the left node
// if what has been dequeued has a right node
// enqueue the right node

function QueueNode(val) {
  this.value = val;
  this.next = null;
}

function Queue() {
  this.first = null;
  this.last = null;
  this.size = 0;
}

Queue.prototype.enqueue = function(val) {
  let newNode = new QueueNode(val);
  if (!this.last) this.first = newNode;
  else this.last.next = newNode;
  this.last = newNode;
  return ++this.size;
};

Queue.prototype.dequeue = function() {
  if (!this.first) return null;
  let removedNode = this.first;
  if (this.first === this.last) this.last = null;
  this.first = this.first.next;
  this.size--;
  return removedNode.value;
};

BinarySearchTree.prototype.breadthFirstSearch = function() {
  let curr;
  let res = [];
  let queue = new Queue();
  queue.enqueue(this.root);
  while (queue.size) {
    curr = queue.dequeue();
    res.push(curr.value);
    if (curr.left) queue.enqueue(curr.left);
    if (curr.right) queue.enqueue(curr.right);
  }
  return res;
};

BinarySearchTree.prototype.breadthFirstSearch = function() {
  let queue = [this.root];
  let result = [];
  let node;
  while (queue.length) {
    node = queue.shift();
    result.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
};

// remove
// This function should remove a node from a binary search tree. Your remove function should be able to handle removal of the root node, removal of a node with one child and removal of a node with two children. The function should return the node removed.
// Removing a node with no children

// The simplest possible scenario is that the node we want to remove has no children. In this case, all we need to do is ensure that the parent node of the node to be removed (if the node to be removed is not the root) is aware that the node has been removed.

// Removing a node with one child

// If we remove a node that has one child, we need to make sure to update the parent of the removed node and set its left or right property to be the single child of the removed node.

// Removing a node with two children

// Removing a node with two children is a bit more difficult, because after removal the tree still needs to satisfy the conditions of a binary search tree. Here are the steps involved:

// Find the node to remove
// Find the successor of the node
// Replace the node to be deleted with the successor
// What is the successor? The leftmost child of the right child, if your current node has a right child. If the right child has no left child, the right child is your in-order successor. In other words, the successor is the unique node which can replace the node being removed and keep the subtree below the node being removed as a binary search tree.

BinarySearchTree.prototype.find = function(val, node = this.root) {
  if (!node) return undefined;
  if (val === node.value) return node;
  if (val < node.value) return this.find(val, node.left);
  if (val > node.value) return this.find(val, node.right);
};

BinarySearchTree.prototype.findParent = function(val, parent = this.root) {
  if (!parent) return undefined;
  if (
    (parent.left && val === parent.left.value) ||
    (parent.right && val === parent.right.value)
  )
    return parent;
  if (val < parent.value) return this.findParent(val, parent.left);
  if (val > parent.value) return this.findParent(val, parent.right);
};

BinarySearchTree.prototype.findSmallest = function(node = this.root) {
  if (node.left) return this.findSmallest(node.left);
  return node;
};

BinarySearchTree.prototype.remove = function(val, node = this.root) {
  let foundNode = this.find(val);
  if (!foundNode) return undefined;
  if (foundNode === this.root) {
    let leftChild = foundNode.left;
    let smallestRightChild = this.findSmallest(foundNode.right);
    this.root = foundNode.right;
    smallestRightChild.left = leftChild;
    return foundNode;
  }
  let foundParent = this.findParent(val);
  //0 children
  if (!foundNode.left && !foundNode.right) {
    if (foundNode.value < foundParent.value) foundParent.left = null;
    else foundParent.right = null;
  } else if (
    (foundNode.left && !foundNode.right) ||
    (foundNode.right && !foundNode.left)
  ) {
    //1 children
    let child = foundNode.left || foundNode.right;
    if (foundNode.value < foundParent.value) foundParent.left = child;
    else foundParent.right = child;
  } else {
    //2 children
    let leftChild = foundNode.left;
    let smallestRightChild = this.findSmallest(foundNode.right);
    if (foundNode.value < foundParent.value)
      foundParent.left = smallestRightChild;
    else foundParent.right = smallestRightChild;
    smallestRightChild.left = leftChild;
  }
  return foundNode;
};

BinarySearchTree.prototype.__countChildren = function(node) {
  let count = 0;
  if (node.left !== null) count++;
  if (node.right !== null) count++;
  return count;
};

BinarySearchTree.prototype.remove = function(value) {
  let isFound = false,
    current = this.root,
    child,
    parent,
    tempNode;

  while (current && !isFound) {
    if (value < current.value) {
      parent = current;
      current = current.left;
    } else if (value > current.value) {
      parent = current;
      current = current.right;
    } else {
      isFound = true;
    }
  }

  if (!isFound) return;

  let childCount = this.__countChildren(current);
  if (childCount === 0) {
    if (parent && current.value > parent.value) {
      parent.right = null;
    } else if (parent && current.value < parent.value) {
      parent.left = null;
    } else {
      this.root = null;
    }
  } else if (childCount === 1) {
    child = current.right || current.left;

    if (parent && current.value > parent.value) {
      parent.right = child;
    } else if (parent && current.value < parent.value) {
      parent.left = child;
    } else {
      this.root = child;
    }
  } else {
    tempNode = current.right;

    while (tempNode.left !== null) {
      tempNode = tempNode.left;
    }

    tempNode.left = current.left;

    if (parent && current.value > parent.value) {
      parent.right = current.right;
    } else if (parent && current.value < parent.value) {
      parent.left = current.right;
    } else {
      this.root = current.right;
    }
  }
};
