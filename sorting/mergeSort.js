// Merge Sort

// Implement the merge sort algorithm. Given an array, this algorithm will sort the values in the array.  The functions take 2 parameters: an array and an optional comparator function.

// The comparator function is a callback that will take two values from the array to be compared.  The function returns a negative value if the first value is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal.

// The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.

// Here's some guidance for how merge sort should work:
// Break up the array into halves until you can compare one value with another
// Once you have smaller sorted arrays, merge those arrays with other sorted pairs until you are back at the full length of the array
// Once the array has been merged back together, return the merged (and sorted!) array

// So how does the algorithm perform in terms of its time complexity? Once the array has been broken down into one-element subarrays, it takes O(n) comparisons to get two-element merged subarrays. From there, it takes O(n) 
// comparisons to get four-element merged subarrays, and so on. In total it takes O(log(n)) sets of O(n) comparisons, since the logarithm roughly measures how many times you can divide a number by 2 until you get a number that is 1 or less. Therefore, the time complexity for merge sort is O(n log(n)), which is significantly better than the complexity of bubble, insertion, and selection sort!

// Even in the best case, merge sort is O(n log(n)). In the worst case, it's O(n log(n)) too. Basically, whenever you think about merge sort, you should think O(n log(n)).

// When trying to implement merge sort, it's helpful to first write a function that takes two sorted arrays and merges them together. Merge sort then works by splitting the array in half, recursively calling itself on each half, and then using the merge helper to merge the two sorted halves back together.

// In order to implement this function, you'll also need to implement a merge function that takes in two sorted arrays and a comparator and returns a new sorted array. You implemented this function last week, just without the comparator; try to adapt the code you wrote then to allow for a general comparator function.

function merge(arr1, arr2, comparator) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }
  let i = 0;
  let j = 0;
  let result = [];
  while (arr1.length > i && arr2.length > j) {
    if (comparator(arr1[i], arr2[j]) < 0) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (arr1.length > i) {
    result.push(arr1[i]);
    i++;
  }
  while (arr2.length > j) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

function mergeSort(arr, comparator) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(
    mergeSort(left, comparator),
    mergeSort(right, comparator),
    comparator
  );
}

function merge(arr1, arr2, comparator) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }

  var results = [];
  var i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (comparator(arr2[j], arr1[i]) > 0) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr, comparator) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }
  if (arr.length <= 1) return arr;
  var mid = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, mid), comparator);
  var right = mergeSort(arr.slice(mid), comparator);
  return merge(left, right, comparator);
}
