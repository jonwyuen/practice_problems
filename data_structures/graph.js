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
