// Implement a constructor function for a graph.
// The graph should contain a list of vertices and an object for building an adjacency list.

function Graph() {
  this.vertices = [];
  this.adjacencyList = {};
}

// Implement the following methods on the `Graph.prototype`

// addVertex- this function should add a node to the graph and place a new key in the adjacency list with the value of an empty array.

// addEdge - this function should add an edge between two nodes in the graph and place each value of the nodes in each array for the value of the node in the adjacency list.

Graph.prototype.addVertex = function(v) {
  this.vertices.push(v);
  this.adjacencyList[v] = [];
};

Graph.prototype.addEdge = function(v1, v2) {
  this.adjacencyList[v1].push(v2);
  this.adjacencyList[v2].push(v1);
};

// removeEdge - this function should accept two nodes and remove the edge between them. It should modify the adjacency list to ensure that both values are not in each array for the two nodes which no longer contain the edge.

// removeVertex - this function should remove the node in the array of nodes and also remove all edges that the removed node previously contained.

Graph.prototype.removeEdge = function(vertex1, vertex2) {
  let index1 = this.adjacencyList[vertex1]
    ? this.adjacencyList[vertex1].indexOf(vertex2)
    : -1;
  let index2 = this.adjacencyList[vertex2]
    ? this.adjacencyList[vertex2].indexOf(vertex1)
    : -1;
  if (index1 > -1) this.adjacencyList[vertex1].splice(index1, 1);
  if (index2 > -1) this.adjacencyList[vertex2].splice(index2, 1);
};

Graph.prototype.removeVertex = function(vertex) {
  let index = this.vertices.indexOf(vertex);
  if (index > -1) this.vertices.splice(index, 1);

  while (this.adjacencyList[vertex].length) {
    var adjacentVertex = this.adjacencyList[vertex].pop();
    this.removeEdge(adjacentVertex, vertex);
  }

  delete this.adjacencyList[vertex];
};

Graph.prototype.removeVertex = function(vertex) {
  let index = this.vertices.indexOf(vertex);
  if (index > -1) this.vertices.splice(index, 1);
  for (let key in this.adjacencyList) {
    if (this.adjacencyList[key].includes(vertex)) {
      this.adjacencyList[key].splice(
        this.adjacencyList[key].indexOf(vertex),
        1
      );
    }
  }
  delete this.adjacencyList[vertex];
};

// numEdges - returns the number of edges in the graph.

Graph.prototype.numEdges = function() {
  let total = 0;
  for (let key in this.adjacencyList) {
    total += this.adjacencyList[key].length;
  }
  return total / 2;
};

Graph.prototype.numEdges = function() {
  let total = 0;
  for (let i = 0; i < this.vertices.length; i++) {
    total += this.adjacencyList[this.vertices[i]].length;
  }
  return total / 2;
};

// depthFirstSearch - this function should return an array of nodes visited using DFS. You can do this iteratively (using a stack) or recursively, but note the order of the results will be different. The test cases should accommodate this.

//recursive
Graph.prototype.depthFirstSearch = function(n, visited = {}, res = []) {
  if (visited[n]) return;
  visited[n] = true;
  res.push(n);
  for (let val of this.adjacencyList[n]) {
    this.depthFirstSearch(val, visited, res);
  }
  return res;
};

//iterative
Graph.prototype.depthFirstSearch = function(n) {
  let stack = [n];
  let res = [];
  let visited = { [n]: true };
  let curr;
  while (stack.length) {
    curr = stack.pop();
    res.push(curr);
    if (this.adjacencyList[curr]) {
      this.adjacencyList[curr].forEach(v => {
        if (!visited[v]) {
          stack.push(v);
          visited[v] = true;
        }
      });
    }
  }
  return res;
};

Graph.prototype.depthFirstSearch = function(start) {
  var visited = {};
  var result = [];
  var adjacencyList = this.adjacencyList;

  (function dfs(vertex) {
    // base case
    if (!vertex) {
      return;
    }
    // visit node
    visited[vertex] = true;
    result.push(vertex);

    // visit neighbors
    adjacencyList[vertex].forEach(neighbor => {
      if (!visited[neighbor]) {
        return dfs(neighbor);
      }
    });
  })(start);

  return result;
};

Graph.prototype.depthFirstSearchIterative = function(start) {
  // Create an empty stack
  var stack = [start];
  var result = [];
  var visited = {};
  var currentVertex;

  // visit node
  visited[start] = true;

  // while there are still neighbors to visit
  while (stack.length) {
    currentVertex = stack.pop();
    result.push(currentVertex);

    // visit neighbors and push onto stack
    this.adjacencyList[currentVertex].forEach(neighbor => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    });
  }
  return result;
};

// breadthFirstSearch - this function should return an array of vertices visited using BFS.

Graph.prototype.breadthFirstSearch = function(n) {
  let queue = [n];
  let res = [];
  let visited = { [n]: true };
  let curr;
  while (queue.length) {
    curr = queue.shift();
    res.push(curr);
    if (this.adjacencyList[curr]) {
      this.adjacencyList[curr].forEach(v => {
        if (!visited[v]) {
          queue.push(v);
          visited[v] = true;
        }
      });
    }
  }
  return res;
};

Graph.prototype.breadthFirstSearch = function(start) {
  // Create an empty queue
  var queue = [start];
  var result = [];
  var visited = {};
  var currentVertex;

  // visit node
  visited[start] = true;

  // While there is still remaining vertices in queue
  while (queue.length) {
    currentVertex = queue.shift();
    result.push(currentVertex);

    // visit neighbors
    this.adjacencyList[currentVertex].forEach(neighbor => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    });
  }
  return result;
};
