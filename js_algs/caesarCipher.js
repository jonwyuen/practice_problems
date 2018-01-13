function caesarCipher(str, num) {
  num = num % 26;
  let lowerCaseStr = str.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let newStr = "";

  for (let i = 0; i < lowerCaseStr.length; i++) {
    let currLetter = lowerCaseStr[i];
    if (currLetter === " ") {
      newStr += currLetter;
      continue;
    }
    let currIdx = alphabet.indexOf(currLetter);
    let newIdx = currIdx + num;
    if (newIdx > 25) newIdx = newIdx - 26;
    if (newIdx < 0) newIdx = 26 + newIdx;
    if (str[i] === str[i].toUpperCase()) {
      newStr += alphabet[newIdx].toUpperCase();
    } else newStr += alphabet[newIdx];
  }

  return newStr;
}
