// // A hash table or hash map is a data structure that can map keys (of any type) to values. Hash tables are one of the most impressive data structures as they have an average runtime of O(1) for searching, insertion, and deletion.

// // When searching for values in the hash table, we pass the key through a special function called a "hashing function," which turns the key into an index. A computer then uses that index to access the key's corresponding value. This isn't exposed to you; it's just used by the computer internally to associate keys with values.

// // One thing to be mindful of when working with hash functions is that they sometimes cause collisions. In other words, it's possible for two keys to get hashed to the same index.
// // When working with hash tables, it is essential to have a good hashing function that does not frequently cause collisions (different inputs return the same output). The function at a minimum should provide a uniform distribution (equal likelihood for all values). The hash table also needs a way to resolve collisions.

// Maps:
// An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. This could be bypassed by using map = Object.create(null) since ES5, but was seldom done.
// The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
// You can get the size of a Map easily with the size property, while the size of an Object must be determined manually.
// Map vs WeakMap: Both implementations of Hash Tables, but keys in WeakMaps must be objects (the trade off here is performance). WeakMaps also behave differently when it comes to garbage collection.
// When an object referenced by their keys/values gets deleted, the garbage collector goes ahead and deletes the key pointer from “WeakMap” and also removes the value of the pointer from memory. But in case of “Map”, the garbage collector doesn’t remove a pointer from “Map” and also doesn’t remove the value from memory.
// So “Map” can cause more garbages in memory. We can say that “Map” references are strong pointer whereas “WeakMap” references are weak pointers.

// Hash tables have quite remarkable performance characteristics. If you can manage collisions in a hash table or if you are lucky enough to know all the keys ahead of time you can even create a perfect hash which will guarantee O(1) lookups for all cases. Here is some more detail about the performance of a hash table.

// Operation Runtime
// search  O(1)
// insert  O(1)
// delete  O(1)
// space complexity  O(n)

// Separate Chaining
// The first solution to handling collisions involves storing multiple pieces of data at each index. This can be done using linked lists, balanced binary search trees or, even another entire hash table! The algorithm that we would have to implement for separate chaining to work look something like this (assuming we're using linked lists):

// Create a large array of prime length,
// To add a key-value pair, hash the key using the hash function to obtain an index.
// If there is no data in the array at that index, create a new linked list and put the key-value pair inside the link list's head,
// If there is already a non-empty linked list in the array at that index (i.e. if there's a collision), insert the key-value pair at the next node in the linked list.

// Linear Probing
// The second solution to handling collisions involves a form of what is called "open addressing," which is the idea that when new key has to be inserted and there is a collision, the algorithm finds another open slot to place that key. Linear probing searches the hash table for the closest free location following the collision and inserts the new key there. Lookups are performed in the same way, by searching the table sequentially starting at the position given by the hash function, until finding a cell with a matching key or an empty cell. The algorithm that we would have to implement for linear probing to work would be

// Create a large array of prime length,
// To add a key-value pair, hash the key using the hash function to obtain an index.
// If there is no data in the array at that index, insert the data into the array
// If there is a collision, move to the next index in the hash table and if there is nothing there, place the key and value
// Otherwise, keep iterating through the hash table to find an empty spot and then place the key and value there

// Note that both of these approaches emphasize the need for a hashing function which tends to distribute indices uniformly across the array. For example, if our hashing function always returns the index 0, the separate chaining technique reduces to just creating a linked list, and our linear probing technique just reduces to creating an array. In either case, we're losing many of the advantages of using a hash table in the first place!

function HashTable(size = 53) {
  this.keyMap = new Array(size);
}

HashTable.prototype.RANDOM_VAL = 18539;

HashTable.prototype.__hash = function(key) {
  var hashFunction = (numericKey, multiple, size) => {
    return (numericKey * multiple) % size;
  };

  if (Number.isFinite(key)) {
    return hashFunction(key);
  }

  if (typeof key === "string" && !isNaN(Number(key))) {
    return hashFunction(Number(key), this.RANDOM_VAL, this.keyMap.length);
  }

  var tempKey = key;
  if (key === null) {
    tempKey = "null";
  }

  if (key === undefined) {
    tempKey = "undefined";
  }

  if (isNaN(key) || !isFinite(key)) {
    tempKey = "NaN";
  }

  if (typeof tempKey === "string") {
    var numKey = 0;
    for (var i = 0; i < tempKey.length && i < 5; i++) {
      numKey += tempKey.charCodeAt(i);
    }

    return hashFunction(numKey, this.RANDOM_VAL, this.keyMap.length);
  }
};

// Implement the following on the `HashTable.prototype`

// set
// This function should set a value in the hashTable based on a specified key. It should be able to handle collisions so if you set with the same key it should still be able to retrieve the correct value.

// get
// This function return a value in the hashTable based on a specified key. It should be able to handle collisions so if you get two different items with the same hashed key it should still be able to retrieve the correct value.

// separate chaining
function Node(key, val) {
  this.key = key;
  this.val = val;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

SinglyLinkedList.prototype.insert = function(key, val) {
  let node = new Node(key, val);
  if (!this.head) this.head = node;
  else this.tail.next = node;
  this.tail = node;
  this.length++;
  return this;
};

SinglyLinkedList.prototype.get = function(key) {
  if (!this.head) return null;
  let curr = this.head;
  while (curr) {
    if (curr.key === key) return curr;
    curr = curr.next;
  }
  return null;
};

HashTable.prototype.set = function(key, val) {
  var index = this.__hash(key);

  if (!this.keyMap[index]) {
    this.keyMap[index] = new SinglyLinkedList();
  }
  this.keyMap[index].insert(key, val);
};

HashTable.prototype.get = function(key) {
  var index = this.__hash(key);
  if (!this.keyMap[index]) return null;
  return this.keyMap[index].get(key).val;
};

// using a node w/o linked list constructor
function HashNode(key, val) {
  this.key = key;
  this.val = val;
  this.next = null;
}

HashTable.prototype.set = function(key, val) {
  var index = this.__hash(key);

  if (!this.keyMap[index]) this.keyMap[index] = new HashNode(key, val);
  else {
    var curr = this.keyMap[index];
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = new HashNode(key, val);
  }
};

HashTable.prototype.get = function(key) {
  var index = this.__hash(key);
  if (!this.keyMap[index]) return null;
  else {
    var curr = this.keyMap[index];
    while (curr) {
      if (curr.key === key) return curr.val;
      curr = curr.next;
    }
    return null;
  }
};

// linear probing
HashTable.prototype.set = function(key, val) {
  var index = this.__hash(key);

  if (this.keyMap[index] === undefined) {
    this.keyMap[index] = [key, val];
  } else {
    while (this.keyMap[index] !== undefined) {
      index++;
    }
    this.keyMap[index] = [key, val];
  }
};

HashTable.prototype.get = function(key) {
  var index = this.__hash(key);

  if (index < 0 || this.keyMap[index] === undefined) return null;
  while (this.keyMap[index]) {
    if (this.keyMap[index][0] !== key) index++;
    else return this.keyMap[index][1];
  }
  return null;
};

// containsKey
// This function should return true if the key specified exists in the hash table.

// remove
// This function should remove a value from the hash table.

// keys
// This function should return an array of all of the keys in the hash table.

// values
// This function should return an array of all of the values in the hash table.

// separate chaining w/ hashnode
HashTable.prototype.containsKey = function(key) {
  var index = this.__hash(key);
  if (this.get(key)) return true;
  return false;
};

HashTable.prototype.remove = function(key) {
  var index = this.__hash(key);
  if (!this.keyMap[index]) return null;
  var curr = this.keyMap[index];
  if (curr.key === key) this.keyMap[index] = curr.next;
  else {
    while (curr.next) {
      if (curr.next.key === key) {
        curr.next = curr.next.next;
        break;
      }
      curr = curr.next;
    }
  }
};

HashTable.prototype.keys = function() {
  let keys = [];
  for (let i = 0; i < this.keyMap.length; i++) {
    if (this.keyMap[i]) {
      let curr = this.keyMap[i];
      while (curr) {
        keys.push(curr.key);
        curr = curr.next;
      }
    }
  }
  return keys;
};

HashTable.prototype.values = function() {
  let values = [];
  for (let i = 0; i < this.keyMap.length; i++) {
    if (this.keyMap[i]) {
      let curr = this.keyMap[i];
      while (curr) {
        values.push(curr.val);
        curr = curr.next;
      }
    }
  }
  return values;
};
