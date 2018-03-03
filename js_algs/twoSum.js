function twoSum(arr, sum) {
  let pairs = [];
  let freq = new Set();

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let counterpart = sum - current;
    if (freq.has(counterpart)) pairs.push([current, counterpart]);
    if (!freq.has(current)) freq.add(current);
  }

  return pairs;
}
