function isPalindrome(str) {
  str = str.toLowerCase();
  let charsArr = string.split('');
  let validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let lettersArr = [];
  charsArr.forEach(char => {
    if (validChars.indexOf(char) > -1) lettersArr.push(char);
  });

  if (lettersArr.join('') ===  lettersArr.reverse().join('')) return true;
  else return false;
}