// Given an array of integers and a target, return a pair of indices where the corresponding values in the array add up to the target.

// Input: Array of Integers, Target Integer
// Output: Two element Array of Integers
// Example
// Input: [1, 6, -5, 7, 3], -2      => Output: [2,4]
// Input: [1, 9, 10], 8      =>  Output: [-1,-1]
// Constraints
// Time Complexity: O(N)
// Auxiliary Space Complexity: O(N)


function twoSum(arr, target) {
  let freq = {};

  for (let i = 0; i < arr.length; i++) {
    if(!freq[arr[i]]) freq[arr[i]] = i;
  }

  for (let j = 0; j < arr.length; j++) {
    if(freq[target-arr[j]]) return [j, freq[target-arr[j]]];
  }

  return [-1, -1];
}