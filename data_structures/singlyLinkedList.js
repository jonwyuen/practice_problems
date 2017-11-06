//  A linked list is an ordered list of data and is not stored contiguously. It stores the data for a particular index as well as a pointer to the next element in the list.

// Advantage - O(1) shift, unshift operations. Since a linked list is not stored contiguously, each node only takes up one memory slot at a time. Therefore, doing operations like shift are always constant time. Moreover, if you keep a reference to the last element (tail) of the list, pushing is also a constant time operation. In a doubly linked list, popping is constant time too.

// Disadvantage - O(n) element access. A linked list is not stored contiguously and we only have a reference to the head (and possibly the tail) node. That means that finding an element at a specific index requires iterating through the list until that node is reached.

// access: O(n)
// push: O(1) if keep ref of tail
// unshift / shift:  O(1)
// pop: O(n) (iterate from the front to find the element before the last)
// find:  O(n)
// insert in middle: O(n)
// remove from middle: O(n)

// Implement the following constructor functions

// Node
// - each node should have a property called val which is passed to the constructor
// - each node should have a property called next which is initialized to null

// SinglyLinkedList
// - each list should have a head property which is initialized to null
// - each list should have a tail property which is initialized to null
// - each list should have a length property which is initialized to 0

function Node(val) {
  this.val = val;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

// Implement the following on the SinglyLinkedList.prototype:

// push
// This function should take in a value and add a node to the end of the SinglyLinkedList. It should return the SinglyLinkedList.

// pop
// This function should remove a node at the end of the SinglyLinkedList. It should return the node removed.

SinglyLinkedList.prototype.push = function(val) {
  let node = new Node(val);
  if (!this.head) {
    this.head = node;
  } else {
    this.tail.next = node;
  }
  this.tail = node;
  this.length++;
  return this;
};

SinglyLinkedList.prototype.pop = function() {
  if (!this.length) return undefined;
  let curr = this.head;
  let removed = this.tail;
  if (this.length === 1) {
    this.head = null;
    this.tail = null;
  } else {
    while (curr.next !== this.tail) {
      curr = curr.next;
    }
    curr.next = null;
    this.tail = curr;
  }
  this.length--;
  return removed;
};

// unshift
// This function should take in a value and add a node to the beginning of the SinglyLinkedList. It should return the list.

// shift
// This function should remove a node at the beginning of the SinglyLinkedList. It should return the value of the node removed.

SinglyLinkedList.prototype.unshift = function(val) {
  let node = new Node(val);
  if (!this.length) {
    this.tail = node;
  } else {
    node.next = this.head;
  }
  this.head = node;
  this.length++;
  return this;
};

SinglyLinkedList.prototype.shift = function() {
  if (!this.length) return undefined;
  let removed = this.head;
  if (this.length === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
    removed.next = null;
  }
  this.length--;
  return removed.val;
};

// __get
// This internal/helper function should find a node at a specified index in a SinglyLinkedList. It should return the found node.

// set
// This function should accept an index and a value and update the value of the node in the SinglyLinkedList at the index with the new value. It should return true if the node is updated successfully, or false if an invalid index is passed in.

SinglyLinkedList.prototype.__get = function(idx) {
  if (idx < 0 || idx >= this.length) return null;
  let curr = this.head;
  let count = 0;
  for (let i = 0; i < idx; i++) {
    curr = curr.next;
  }
  return curr;
};

SinglyLinkedList.prototype.set = function(idx, val) {
  if (idx < 0 || idx >= this.length) return false;
  let curr = this.head;
  for (let i = 0; i < idx; i++) {
    curr = curr.next;
  }
  curr.val = val;
  return true;
};

SinglyLinkedList.prototype.set = function(idx, val) {
  let curr = this.__get(idx);
  if (curr === null) return false;
  curr.val = val;
  return true;
};

// __insert
// This internal/helper function should insert a node at a specified index in a SinglyLinkedList. It should return true if the index is valid, and false if the index is invalid (less than 0 or greater than the length of the list).

// remove
// This function should remove a node at a specified index in a SinglyLinkedList. It should return the removed node. if the index is valid, or undefined if the index is invalid.

// reverse
// This function should reverse all of the nodes in a SinglyLinkedList, and should return the list.

SinglyLinkedList.prototype.__insert = function(idx, val) {
  if (idx < 0 || idx > this.length) return false;
  let node = new Node(val);
  let curr = this.head;
  if (idx === 0) {
    if (!this.length) this.tail = node;
    node.next = this.head;
    this.head = node;
  } else {
    for (let i = 0; i < idx - 1; i++) {
      curr = curr.next;
    }
    let nextNode = curr.next;
    curr.next = node;
    node.next = nextNode;
  }
  this.length++;
  return true;
};

SinglyLinkedList.prototype.remove = function(idx) {
  if (idx < 0 || idx > this.length || !this.length) return undefined;
  let curr = this.head;
  if (idx === 0) {
    if (this.length === 1) this.tail = null;
    this.head = curr.next;
    curr.next = null;
  } else {
    for (let i = 0; i < idx - 1; i++) {
      curr = curr.next;
    }
    let removedNode = curr.next;
    curr.next = removedNode.next;
    removedNode.next = null;
    curr = removedNode;
  }
  this.length--;
  return curr;
};

SinglyLinkedList.prototype.reverse = function() {
  let node = this.head;
  this.head = this.tail;
  this.tail = node;
  let next;
  let prev = null;
  for (let i = 0; i < this.length; i++) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return this;
};
