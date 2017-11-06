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

// Implement the following on the `SinglyLinkedList.prototype`

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

// Implement the following on the SinglyLinkedList.prototype

// __get
// This internal/helper function should find a node at a specified index in a SinglyLinkedList. It should return the found node.

// set
// This function should accept an index and a value and update the value of the node in the SinglyLinkedList at the index with the new value. It should return true if the node is updated successfully, or false if an invalid index is passed in.

SinglyLinkedList.prototype.__get = function(idx) {
  if (idx < 0 || idx >= this.length) return null;
  let curr = this.head;
  let count = 0;
  while (count !== idx) {
    curr = curr.next;
    count++;
  }
  return curr;
};

SinglyLinkedList.prototype.set = function(idx, val) {
  if (idx < 0 || idx >= this.length) return false;
  let curr = this.head;
  let count = 0;
  while (count !== idx) {
    curr = curr.next;
    count++;
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
