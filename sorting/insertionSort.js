// Insertion Sort

// Here's some guidance for how insertion sort should work:

// Start by picking the second element in the array (we will assume the first element is the start of the "sorted" portion)
// Now compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.
// Repeat until the array is sorted.Implement insertion sort. Your function should accept an array and return an array of sorted values.

// insertion sort typically is O(n2), since you need to go through the array for each element in it in order to find its proper position. In the best case scenario, insertion sort will run at O(n) since only one complete iteration will be necessary.

function insertionSort(arr, comparator) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (comparator(temp, arr[j]) < 0) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}

function insertionSort(arr, comparator) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }

  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i - 1; j > -1 && comparator(arr[j], currentValue) > 0; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }

  return arr;
}
