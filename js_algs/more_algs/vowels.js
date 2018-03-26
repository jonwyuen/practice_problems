function vowels(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.has(char)) count++;
  }

  return count;
}

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
