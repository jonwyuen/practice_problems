// Selection Sort

// Here's some guidance for how selection sort should work:

// Assign the first element to be the smallest value (this is called the minimum). It does not matter right now if this actually the smallest value in the array.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// If the "minimum" is not the value (index) you initially began with, swap the two values. You will now see that the beginning of the array is in the correct order (similar to how after the first iteration of bubble sort, we know the rightmost element is in its correct place).
// Repeat this with the next element until the array is sorted.

// This algorithm has a O(n^2) time complexity, even in best case

function selectionSort(arr, comparator) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }

  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIdx = i;
    let flag = false;

    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[j], min) < 0) {
        min = arr[j];
        minIdx = j;
        flag = true;
      }
    }
    if (flag) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
}

function selectionSort(arr, comparator) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[lowest], arr[j]) > 0) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}
