// Pick an element in the array and designate it as the "pivot". While there are quite a few options for choosing the pivot. We'll make things simple to start, and will choose the pivot as the first element. This is not an ideal choice, but it makes the algorithm easier to understand for now.
// Next, compare every other element in the array to the pivot.
// If it's less than the pivot value, move it to the left of the pivot.
// If it's greater, move it to the right.
// Once you have finished comparing, the pivot will be in the right place.
// Next, recursively call quicksort again with the left and right halves from the pivot until the array is sorted.

// It's easiest to implement quicksort with the aid of a helper function. This function is responsible for taking an array, setting the pivot value, and mutating the array so that all values less than the pivot wind up to the left of it, and all values greater than the pivot wind up to the right of it. It's also helpful if this helper returns the index of where the pivot value winds up.

// Quicksort typically runs at O(n log(n)), and even in the best case is O(n log(n)). But in the worst case - if the pivot is chosen to be the leftmost element and the array is already sorted, for instance - the runtime will be O(n2).

function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }
  let p = start;

  for (let i = 1; i <= end; i++) {
    if (comparator(arr[i], arr[p]) < 0) {
      // let temp = arr[i];
      // arr[i] = arr[p+1];
      // arr[p+1] = arr[p];
      // arr[p] = temp;
      [arr[i], arr[p], arr[p + 1]] = [arr[p + 1], arr[i], arr[p]];
      p++;
    }
  }
  return p;
}

function quickSort(arr, comparator, start = 0, end = arr.length - 1) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }
  if (end - start <= 1) return;
  let p = pivot(arr, comparator, start, end);
  quickSort(arr, comparator, 0, p - 1);
  quickSort(arr, comparator, p + 1, arr.length - 1);
  return arr;
}

function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }

  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  // We are assuming the pivot is always the last element
  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i <= end; i++) {
    if (comparator(pivot, arr[i]) > 0) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, comparator, left = 0, right = arr.length - 1) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }
  if (left < right) {
    let pivotIndex = pivot(arr, comparator, left, right);
    quickSort(arr, comparator, left, pivotIndex - 1);
    quickSort(arr, comparator, pivotIndex + 1, right);
  }
  return arr;
}
