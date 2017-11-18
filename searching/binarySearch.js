// binarySearch
// This function should accept an array and value and return the index at which the value exists or -1 if the value can not be found. Do not use indexOf to solve this! This function should use iteration not recursion. Make sure that your algorithm runs in O(log(n)) and not O(n).

// binarySearchRecursive
// This function should accept an array and value and return the index at which the value exists or -1 if the value can not be found. Do not use indexOf to solve this! This function should use recursion. Make sure that your algorithm runs in O(log(n)) and not O(n).

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) return mid;
    else if (arr[mid] < val) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}

function binarySearchRecursive(arr, val, start = 0, end = arr.length - 1) {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === val) return mid;
  else if (arr[mid] < val) return binarySearchRecursive(arr, val, mid + 1, end);
  else return binarySearchRecursive(arr, val, start, mid - 1);
}

function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  // currentIndex is half
  var middle = Math.floor((start + end) / 2);
  var passes = 0;
  // while middle is not the element and start < end
  while (arr[middle] !== elem && start <= end) {
    passes++;
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] !== elem ? -1 : middle;
}
