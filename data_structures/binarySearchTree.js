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
