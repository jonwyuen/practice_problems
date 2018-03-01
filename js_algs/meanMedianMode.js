function meanMedianMode(arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  };
}

function getMean(arr) {
  return arr.reduce((total, val) => (total += val)) / arr.length;
}

function getMedian(arr) {
  arr.sort((a, b) => a - b);

  if (arr.length % 2 !== 0) return arr[Math.floor(arr.length / 2)];
  else return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
}

function getMode(arr) {
  let freq = {};

  arr.forEach(num => (freq[num] = (freq[num] || 0) + 1));

  let maxFreq = 0;
  let modes = [];
  for (let num in freq) {
    if (freq[num] > maxFreq) {
      modes = [num];
      maxFreq = freq[num];
    } else if (freq[num] === maxFreq) {
      modes.push(num);
    }
  }
  if (modes.length === Object.keys(freq).length) modes = [];
  return modes;
}
