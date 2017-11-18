// linearSearch
// This function should accept an array and value and return the first index at which the value exists or -1 if the value can not be found. Do not use indexOf to solve this! This function should use iteration not recursion.

// linearSearchRecursive
// This function should accept an array and value and return the index at which the value exists or -1 if the value can not be found. Do not use indexOf to solve this! This function should use recursion.

function linearSearch(arr, val){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === val) return i;
  }
  return -1;
}

function linearSearchRecursive(arr, val, count=0){
  if (arr.length === 0) return -1;
  if (arr[0] === val) return count;
  return linearSearchRecursive(arr.slice(1), val, count + 1);
}
