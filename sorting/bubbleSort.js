// Implement a function called bubbleSort.  Given an array, bubbleSort will sort the values in the array.  The function takes 2 parameters: an array and an optional comparator function.

// The comparator function is a callback that will take two values from the array to be compared.  The function returns a negative value if the first value is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal.

// The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.

// Bubble sort is an O(n^2) algorithm because there's a nesting of loops: you run through the array, and at each iteration you have to run through a subarray of the original array. In the best case scenario, bubble sort will run at O(n) since only one complete iteration will be necessary.

// For each element in the array, compare it with the next element (the element to the right).
// If the element is greater than the value on the right, swap the two values.
// Continue to swap until you have reached the end of the array. At this point the rightmost element will be in its correct place.
// Start at the beginning of the array and repeat this process. Since the rightmost element from the last iteration is now sorted, this process will terminate earlier and earlier each time you repeat.

function bubbleSort(arr, comparator) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }

  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (comparator(arr[j], arr[j + 1]) > 0) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function bubbleSort(arr, comparator) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }
  let end = arr.length;
  while (end > 0) {
    for (let i = 0; i < end - 1; i++) {
      if (comparator(arr[i], arr[i + 1]) > 0) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    end--;
  }
  return arr;
}
