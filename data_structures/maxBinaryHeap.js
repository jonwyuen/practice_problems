// each node can only have at most two children
// when a node is added, you always start at the root and then keep adding, top to bottom, left to right.

// Arrays are how binary heaps are commonly implemented in JavaScript for common use cases like heapsort and priority queues. When we build a heap using an array, it is important to understand the placement of parents relative to their children.

// Parent at index n:
// - its left child will be at index 2n + 1
// - its right child will be at index 2n + 2

// Child node at index n
// - its parent node will be at index Math.floor( (n-1) / 2 )

//Use Cases
// heapsort - Heapsort is a useful in-place (O(1) space complexity) sorting algorithm that has an average performance of O(n log(n)). It requires building a heap and then swapping values to sort.

// priority queue - We previously have seen queues which allow for O(1) insertion and deletion and a more advanced implementation of a queue is one that can re-order itself when a new element is enqueued. The elements in the queue are re-ordered in terms of their priority, which is why this is called a priority queue. Priority queues are easily implemented using min or max heaps to manage the priority and ordering of the queue.

// min-max-heap - we have seen min and max heaps, but there is also another data structure called a min-max heap which is a combination of min and max heaps and are frequently used to implement double-ended priority queues.

// Binary heaps have impressive performance characteristics for deletion and insertion, but they are not as efficient as binary search trees for searching since each node must be visited. The space complexity for a binary heap is O(n) similar to binary search trees.

// Operation Average Runtime
// search  O(n)
// insert  O(1)
// delete  O(log(n))
// space complexity  O(n)

function MaxBinaryHeap(val) {
  this.values = [];
}

// insert
// Implement the `insert` function on the `MaxBinaryHeap.prototype`: This function should insert a node in a binary heap. Make sure to re-order the heap after insertion if necessary.

// Add the element to the heap (work your way from top to bottom, then left to right). We do not worry about comparing values and trying to insert it at the correct position based on its value, we only need to place it in the correct spot to satisfy the rules of a heap (nodes are placed top to bottom, then left to right).
// Once the element is placed at the last spot in the heap (top to bottom, left to right), compare the element with its parent. If the element is less than its parent, it is in the correct order and you are done. If the element is greater than its parent, you swap the placement of the parent node and the element. Keep repeating this process until the element you are adding has a parent that is greater than itself or the element you are adding is at the root. This can be done iteratively or recursively.

MaxBinaryHeap.prototype.bubbleUp = function(i) {
  let element = this.values[i];
  let parentI = Math.floor((i - 1) / 2);
  let parent = this.values[parentI];
  while (i > 0 || element > parent) {
    [this.values[i], this.values[parentI]] = [
      this.values[parentI],
      this.values[i]
    ];
    i = parentI;
    parentI = Math.floor((i - 1) / 2);
    parent = this.values[parentI];
  }
};

MaxBinaryHeap.prototype.insert = function(val) {
  this.values.push(val);
  this.bubbleUp(this.values.length - 1);
};

MaxBinaryHeap.prototype.insert = function(val) {
  this.values.push(val);
  let c = this.values.length - 1;
  let p = Math.floor((c - 1) / 2);
  while (c > 0 || this.values[c] > this.values[p]) {
    [this.values[c], this.values[p]] = [this.values[p], this.values[c]];
    c = p;
    p = Math.floor((c - 1) / 2);
  }
};

// extractMax
// Implement the `extractMax` function on the `MaxBinaryHeap.prototype`: This function should remove the root node in a binary heap. Make sure to re-order the heap after removal if necessary.

// Replace the root of the heap with the last element on the last level (all the way on the bottom, the last node remaining going from left to right). Once again, we are not worried about comparing values, we just need to move another node to where the root node was (since it is now removed). We will compare values later.
// Compare the new root node with its children, if it is greater than both of its children, keep it there. If it is less than its children, pick the higher of the children and swap the position of the new root with the child. Keep repeating this process until the node which has become the root is in the correct place (has a parent with a greater value).

MaxBinaryHeap.prototype.extractMax = function() {
  if (!this.values.length) return undefined;
  let removed = this.values[0];
  let end = this.values.pop();
  if (this.values.length) {
    this.values[0] = end;
    let p = 0;

    const findGreaterChild = p => {
      let lc = 2 * p + 1;
      let rc = 2 * p + 2;
      if (!this.values[lc]) return p;
      if (!this.values[rc]) return lc;
      return this.values[lc] > this.values[rc] ? lc : rc;
    };

    let c = findGreaterChild(p);
    while (this.values[p] && this.values[p] < this.values[c]) {
      [this.values[p], this.values[c]] = [this.values[c], this.values[p]];
      p = c;
      c = findGreaterChild(p);
    }
  }
  return removed;
};

MaxBinaryHeap.prototype.extractMax = function() {
  let result = this.values[0];
  let end = this.values.pop();
  if (this.values.length) {
    this.values[0] = end;
    this.sinkDown(0);
  }
  return result;
};

MaxBinaryHeap.prototype.sinkDown = function(n) {
  let length = this.values.length;
  let element = this.values[n];
  while (true) {
    let lc = 2 * n + 1;
    let rc = 2 * n + 2;
    let swap = null;
    if (lc < length) {
      if (this.values[lc] > element) swap = lc;
    }
    if (rc < length) {
      if (this.values[rc] > (swap == null ? element : this.values[lc]))
        swap = rc;
    }
    if (swap == null) break;
    this.values[n] = this.values[swap];
    this.values[swap] = element;
    n = swap;
  }
};

// maxHeapify
// Given an array of numbers, implement a function called `maxHeapify` which converts an array of numbers into a max-heap. The tests will pass as long as each element in the array is less than its parent

function maxHeapify(arr) {}
