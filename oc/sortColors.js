// Given an array of integers values of 0, 1, and 2 (representing Red, White, and Blue), sort them in linear time.

// Input: Array of Integers where elements values belong to the set S : { 0, 1, 2 }
// Output: Sorted Array
// Example
// Input: [2, 0, 1, 2, 1, 0] =>  Output: [0, 0, 1, 1, 2, 2]
// Input: [1, 2, 2, 0]   =>  Output: [0, 1, 2, 2]
// Constraints
// Time Complexity: O(N)
// Auxiliary Space Complexity: O(1)

// Using a native sorting method is not allowed.

function sortColors(arr) {
  let freq = new Array(3).fill(0);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) freq[0]++;
    else if (arr[i] === 1) freq[1]++;
    else freq[2]++;
  }

  let p = 0;
  for (let j = 0; j < arr.length; j++) {
    if (freq[p] > 0) {
      freq[p]--;
      arr[j] = p;
    }
    if (freq[p] === 0) p++;
  }
  return arr;
}
