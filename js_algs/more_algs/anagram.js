function anagram(str1, str2) {
  const freq1 = buildFrequency(str1);
  const freq2 = buildFrequency(str2);

  if (Object.keys(freq1).length !== Object.keys(freq2).length) return false;

  for (let char in freq1) {
    if (freq1[char] !== freq2[char]) return false;
  }

  return true;
}

function buildFrequency(str) {
  const freq = {};

  for (let char in str.replace(/[^\w]/g, "").toLowerCase()) {
    freq[char] = (freq[char] || 0) + 1;
  }

  return freq;
}

function anagram(str1, str2) {
  return cleanString(str1) === cleanString(str2);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}
