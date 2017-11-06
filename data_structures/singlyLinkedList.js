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
