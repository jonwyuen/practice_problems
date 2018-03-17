function arrayChunk(arr, size) {
  let result = [];
  let i = 0;
  while (i < arr.length) {
    let temp = [];
    for (let j = 0; j < size; j++) {
      if (i < arr.length) {
        temp.push(arr[i]);
        i++;
      }
    }
    result.push(temp);
  }

  return result;
}

function arrayChunk(arr, size) {
  let result = [];

  for (let element of arr) {
    let last = result[result.length - 1];
    if (!last || last.length === size) {
      result.push([element]);
    } else {
      last.push(element);
    }
  }

  return result;
}

function arrayChunk(arr, size) {
  let result = [];
  let index = 0;

  while (index < arr.length) {
    result.push(arr.slice(index, index + size));
    index += size;
  }

  return result;
}

arrayChunk([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
arrayChunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
