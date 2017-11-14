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
