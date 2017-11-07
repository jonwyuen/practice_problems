// Advantage - O(1), constant time push, pop operations. Since a linked list is not stored contiguously, each node only takes up one memory slot at a time. Therefore, doing operations like push are always constant time (assuming you have a reference to the last element in the list, or the tail) because the entire list does not need to be copied over. Only the pointer of the last node in the list needs to be updated.

// Disadvantage - O(n) element access. A linked list is not stored contiguously and we only have a reference to the head (and possibly the tail) node. That means that finding an element at a specific index requires iterating through the list until that node is reached. This is a O(n) operation, but it is a constant time operation in an array.

// Since we have the ability to access a previous node in a doubly linked list, we can write a more efficient way to find nodes by either starting from the beginning or end and reduce the amount of traversing by half! The only tradeoff here is that a doubly linked list will consume more memory than a singly linked list because of the additional references to previous nodes.

// Implement the following constructor functions:

// Node
// - each node should have a property called val which is passed to the constructor
// - each node should have a property called next which is initialized to null
// - each node should have a property called prev which is initialized to null

// DoublyLinkedList
// - each list should have a head property which is initialized to null
// - each list should have a tail property which is initialized to null
// - each list should have a length property which is initialized to 0

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

// Implement the following on the DoublyLinkedList.prototype:

// push
// This function should accept a value add a node to the end of the DoublyLinkedList with the given value. It should return the DoublyLinkedList.

// pop
// This function should remove a node at the end of the DoublyLinkedList. It should return the node removed.

DoublyLinkedList.prototype.push = function(val) {
  let newNode = new Node(val);
  if (!this.length) {
    this.head = newNode;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
  }
  this.tail = newNode;
  this.length++;
  return this;
};

DoublyLinkedList.prototype.pop = function() {
  let removedNode = this.tail;
  if (!this.length) return undefined;
  if (this.length === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
  removedNode.prev = null;
  this.length--;
  return removedNode;
};
