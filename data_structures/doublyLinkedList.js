// Advantage - O(1), constant time push, pop operations. Since a linked list is not stored contiguously, each node only takes up one memory slot at a time. Therefore, doing operations like push are always constant time (assuming you have a reference to the last element in the list, or the tail) because the entire list does not need to be copied over. Only the pointer of the last node in the list needs to be updated.

// Disadvantage - O(n) element access. A linked list is not stored contiguously and we only have a reference to the head (and possibly the tail) node. That means that finding an element at a specific index requires iterating through the list until that node is reached. This is a O(n) operation, but it is a constant time operation in an array.

// Since we have the ability to access a previous node in a doubly linked list, we can write a more efficient way to find nodes by either starting from the beginning or end and reduce the amount of traversing by half! The only tradeoff here is that a doubly linked list will consume more memory than a singly linked list because of the additional references to previous nodes.

// access: O(n)
// push: O(1)
// unshift / shift:  O(1)
// pop: O(1) (b/c have ref to prev)
// find:  O(n)
// insert in middle: O(n)
// remove from middle: O(n)

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
  if (!this.length) return undefined;
  let removedNode = this.tail;
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

// unshift
// This function should accept a value and add a node to the beginning of the DoublyLinkedList with the given value. It should return the DoublyLinkedList.

// shift
// This function should remove a node at the beginning of the DoublyLinkedList. It should return the node removed.

DoublyLinkedList.prototype.unshift = function(val) {
  let newNode = new Node(val);
  if (!this.length) {
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head.prev = newNode;
  }
  this.head = newNode;
  this.length++;
  return this;
};

DoublyLinkedList.prototype.shift = function() {
  if (!this.length) return undefined;
  let removedNode = this.head;
  if (this.length === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
    this.head.prev = null;
  }
  removedNode.next = null;
  this.length--;
  return removedNode;
};

// __get
// This internal/helper function should find a node at a specified index in a DoublyLinkedList. It should return the found node.

// set
// This function should accept an index and a value and update the value of the node in the DoublyLinkedList at the index with the new value. It should return true if the node is updated successfully, or false if an invalid index is passed in.

DoublyLinkedList.prototype.__get = function(idx) {
  if (idx < 0 || idx >= this.length || !this.length) return null;
  let curr;
  if (idx <= Math.floor(this.length / 2)) {
    curr = this.head;
    for (let i = 0; i < idx; i++) {
      curr = curr.next;
    }
  } else {
    curr = this.tail;
    for (let i = this.length - 1; i > idx; i--) {
      curr = curr.prev;
    }
  }
  return curr;
};

DoublyLinkedList.prototype.set = function(idx, val) {
  let foundNode = this.__get(idx);
  if (!foundNode) return false;
  else {
    foundNode.val = val;
    return true;
  }
};

// __insert
// This internal/helper function should insert a node at a specified index in a DoublyLinkedList. It should return true if the index is valid, and false if the index is invalid (less than 0 or greater than the length of the list).

// remove
// This function should remove a node at a specified index in a DoublyLinkedList. It should return the removed node. if the index is valid, or undefined if the index is invalid.

// reverse
// This function should reverse all of the nodes in a DoublyLinkedList, and should return the list.

DoublyLinkedList.prototype.__insert = function(idx, val) {
  if (idx < 0 || idx > this.length) return false;
  let newNode = new Node(val);
  let prevNode;
  if (idx === 0) {
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return true;
  }
  if (idx === this.length) {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return true;
  }
  if (idx <= Math.floor(this.length / 2)) {
    prevNode = this.head;
    for (let i = 0; i < idx - 1; i++) {
      prevNode = prevNode.next;
    }
  } else {
    prevNode = this.tail;
    for (let i = this.length - 1; i > idx - 1; i--) {
      prevNode = prevNode.prev;
    }
  }
  newNode.prev = prevNode;
  newNode.next = prevNode.next;
  prevNode.next.prev = newNode;
  prevNode.next = newNode;
  this.length++;
  return true;
};

DoublyLinkedList.prototype.remove = function(idx) {
  if (idx < 0 || idx >= this.length || !this.length) return undefined;
  let removedNode;
  if (idx === 0) {
    removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }
  if (idx === this.length - 1) {
    removedNode = this.tail;
    this.tail = this.tail.prev;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
  if (idx <= Math.floor(this.length / 2)) {
    removedNode = this.head;
    for (let i = 0; i < idx; i++) {
      removedNode = removedNode.next;
    }
  } else {
    removedNode = this.tail;
    for (let i = this.length - 1; i > idx; i--) {
      removedNode = removedNode.prev;
    }
  }
  removedNode.prev.next = removedNode.next;
  removedNode.next.prev = removedNode.prev;
  removedNode.prev = null;
  removedNode.next = null;
  this.length--;
  return removedNode;
};

DoublyLinkedList.prototype.reverse = function() {
  let curr = this.head;
  while (curr) {
    [curr.next, curr.prev] = [curr.prev, curr.next];
    curr = curr.prev;
  }
  [this.head, this.tail] = [this.tail, this.head];
  return this;
};

DoublyLinkedList.prototype.reverse = function() {
  let curr = this.head;
  let temp;
  while (curr) {
    temp = curr.next;
    curr.next = curr.prev;
    curr.prev = temp;
    if (!temp) {
      this.tail = this.head;
      this.head = curr;
    }
    curr = temp;
  }
  return this;
};

