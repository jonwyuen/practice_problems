function maxChar(str) {
  let freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let max = 0;
  let result = "";
  for (let key in freq) {
    if (freq[key] > max) {
      max = freq[key];
      result = key;
    }
  }

  return result;
}
