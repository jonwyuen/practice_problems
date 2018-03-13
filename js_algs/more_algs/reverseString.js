function reverse(str) {
  let result = "";

  for (let i = str.length - 1; i > -1; i--) {
    result = result.concat(str[i]);
  }

  return result;
}

function reverse(str) {
  let result = "";

  for (let char of str) {
    result = char + result;
  }

  return result;
}

function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
