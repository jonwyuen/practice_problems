// Queue is a First In, First Out (FIFO) data structure. It maintains an order and the first element added or enqueued to the queue is the first that will be returned or dequeued

// enqueue O(1) - Add an item to the back of the line
// dequeue O(1) - Return the first element in the queue. In the example below
// length - How many elements are in the queue.

// Prioritization - One of the most common use cases for a queue is when priority is important. Let's imagine your web site has thousands of requests a second. Since you cannot service all requests at the same time, you might implement a first-come-first serve policy by time of arrival. To manage the priority and ordering of requests, a Queue would be the most ideal data structure to use.
//Similarly in a multitasking operating system, the CPU cannot run all jobs at once, so jobs must be batched up and then scheduled according to some policy. Again, a queue might be a suitable option in this case. Finally, queues are commonly used with scheduling jobs for printers, where the first job to be enqueued is the first to be print.

// Searching Algorithms / Traversal - for certain kinds of algorithms (especially BST), remembering information in a certain order can easily be achieved using a queue. Queues can also be used with maze algorithms to keep track of options that have not yet been explored.

// Job/Process Scheduling - Very commonly when background jobs are being run, there is a queue that manages the order in which these background jobs are coming in and how they are being processed. Very commonly, in memory databases like Redis are used to manage these processes.

// - Write a constructor function for a Node
//     - it should have a value property which is assigned to a value passed as a parameter to the
// constructor function
//     - it should have a next property initialized to null

// - Write a constructor function for a Queue
//     - it should have a size property initialized to 0
//     - it should have a first property initialized to null
//     - it should have a last property initialized to null

function Node(val) {
  this.value = val;
  this.next = null;
}

function Queue() {
  this.first = null;
  this.last = null;
  this.size = 0;
}

// Implement the following methods on the `Queue.prototype`

// enqueue
// This function adds the value to the end of the queue. This should be an O(1) operation and return the new size of the queue.

Queue.prototype.enqueue = function(val) {
  let newNode = new Node(val);
  if (!this.last) this.first = newNode;
  else this.last.next = newNode;
  this.last = newNode;
  return ++this.size;
};

// dequeue
// This function removes the value at the beginning of the queue. This should be an O(1) operation and return the value removed.

Queue.prototype.dequeue = function() {
  if (!this.first) return null;
  let removedNode = this.first;
  if (this.first === this.last) this.last = null;
  this.first = this.first.next;
  this.size--;
  return removedNode.value;
};

// peek
// This function returns the first value in the queue.

Queue.prototype.peek = function() {
  if (!this.first) return null;
  return this.first.value;
};
