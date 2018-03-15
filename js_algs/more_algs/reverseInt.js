function reverseInt(n) {
  let numStr = n.toString();
  let result = "";

  for (let i = 0; i < numStr.length; i++) {
    result = numStr[i] + result;
  }

  return parseInt(result) * Math.sign(n);
}


function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}