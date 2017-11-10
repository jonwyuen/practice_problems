// Implement a PriorityQueue. Instead of inserting a value, you'll insert a node object which contains a val and priority property. Your PriorityQueue should have the highest priority at the top and maintain the structure of a MaxBinaryHeap.

function PriorityQueue() {
  this.values = [];
}

function Node(val, priority) {
  this.val = val;
  this.priority = priority;
}

// Enqueue
// This function should add a node to the PriorityQueue and should run in O(log(n)).

PriorityQueue.prototype.enqueue = function(val, priority) {
  let node = new Node(val, priority);
  this.values.push(node);
  let c = this.values.length - 1;

  while (c > 0) {
    let p = Math.floor((c - 1) / 2);
    if (this.values[c].priority > this.values[p].priority) {
      [this.values[c], this.values[p]] = [this.values[p], this.values[c]];
      c = p;
    } else break;
  }
};

// Dequeue
// This function should remove the first node in the PriorityQueue and return the removed Node. It should run in O(log(n)) time.

PriorityQueue.prototype.dequeue = function() {
  if (!this.values.length) return undefined;
  let removed = this.values[0];
  let end = this.values.pop();
  if (this.values.length) {
    this.values[0] = end;

    const findGreaterChild = p => {
      let lc = 2 * p + 1;
      let rc = 2 * p + 2;
      if (!this.values[lc]) return p;
      if (!this.values[rc]) return lc;
      return this.values[lc].priority > this.values[rc].priority ? lc : rc;
    };

    let p = 0;
    while (true) {
      let c = findGreaterChild(p);
      if (this.values[p].priority < this.values[c].priority) {
        [this.values[p], this.values[c]] = [this.values[c], this.values[p]];
        p = c;
      } else break;
    }
  }
  return removed;
};
