// Given a positive integer represented by an array of digits, add one to that number.

// Input: Array of integers
// Output: Array of integers
// Example
// Input: [1,2,3]        =>  Output: [1,2,4]
// Input: [1, 9]   =>  Output: [2,0]
// Constraints
// Time Complexity: O(N)
// Auxiliary Space Complexity: O(1)

// The input array will be represented with the largest digit down to the ones digit at the last index.

// Values of the array will be digits 0-9.

function plusOne(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 9) {
      arr[i]++;
      return arr;
    }
    arr[i] = 0;
  }

  arr.unshift(1);
  return arr;
}
