// Last In First Out (LIFO) data structure. So the last thing you placed on the stack is the first thing that you can take off of the stack.

// pop - Take something off of the top of the stack
// push - Add something to the top of the stack
// size or length - How many elements are in the stack

// Call Stack - keep track of functions that are being executed or have been executed

// Backtracking - for certain kinds of algorithms(BST), remembering information in a certain order can easily be achieved using a stack

// Back button - every time that you view a page, the previous URL get's added to a stack. If you click the back button that URL will be visited and popped off the stack.

// Undo operation in a text editor - the editor can keep track of changes in a stack, and the last change to be made is the first one to be undone.

// Calculations - calculators and specific kinds of notations (like this one), can be implemented using stacks to keep track of numbers and operations. When the = button is pressed (or other buttons to calculate values), certain values are popped off the stack.

// First implement a constructor function for a Node. Each node should have a value property and a next property. Value should be whatever is passed to the function and next should default to null.

// Your stack should be implemented with the following properties
// first - this should point to the first node in the stack
// last - this should point to the last node in the stack
// size - this should be the number of nodes in the stack

function Node(value) {
  this.value = value;
  this.next = null;
}

function Stack() {
  this.first = null;
  this.last = null;
  this.size = 0;
}

// push - takes in a node and puts it at the top of the stack. Should return the new size of the stack.

Stack.prototype.push = function(val) {
  let newNode = new Node(val);
  if (!this.first) {
    this.first = newNode;
    this.last = newNode;
  } else {
    newNode.next = this.first;
    this.first = newNode;
  }
  return ++this.size;
};

// pop - removes the node at the top of the stack and returns the value of that node.

Stack.prototype.pop = function() {
  if (!this.first) return null;
  let removedNode = this.first;
  if (this.first === this.last) this.last = null;
  this.first = this.first.next;
  this.size--;
  return removedNode.value;
};

// peek - returns the first value in the stack

Stack.prototype.peek = function() {
  if (!this.first) return undefined;
  return this.first.value;
};
