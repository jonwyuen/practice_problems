function merge(arr1, arr2) {
  let result = [];

  while (arr1.length && arr2.length) {
    let minElem;

    if (arr1[0] < arr2[0]) minElem = arr1.shift();
  }
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, mid);
  let secondHalf = arr.slice(mid);
}
