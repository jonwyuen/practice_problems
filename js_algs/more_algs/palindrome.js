function palindrome(str) {
  for (let i = 0; i < Math.floor(str.length/2); i++) {
    if (str[i] !== str[str.length-1-i]) return false;
  }
  return true;
}

function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length-1-i];
  });
}

function palidrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}