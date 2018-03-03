function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) return false;
  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) return true;
  if (arr[mid] < target) return binarySearch(arr, target, mid + 1, end);
  else return binarySearch(arr, target, start, mid - 1);
}

function binarySearch(arr, target) {
  if (arr.length < 1) return false;
  let mid = Math.floor(arr.length / 2);

  if (arr[mid] === target) return true;
  if (arr[mid] < target) return binarySearch(arr.splice(mid), target);
  else return binarySearch(arr.splice(0, mid), target);
}

binarySearch([2, 7, 12, 16, 36, 39, 42, 56, 71], 56);
