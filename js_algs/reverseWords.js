function reverseWords(str) {
  let wordsArr = str.split(" ");
  let result = "";

  wordsArr.forEach((word, idx) => {
    for (let i = word.length - 1; i >= 0; i--) {
      result = result.concat(word[i]);
    }
    if (idx < wordsArr.length - 1) {
      result = result.concat(" ");
    }
  });

  return result;
}

function reverseWords(str) {
  let wordsArr = str.split(" ");
  let resultArr = [];

  wordsArr.forEach(word => {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    resultArr.push(reversedWord);
  });

  return resultArr.join(" ");
}
