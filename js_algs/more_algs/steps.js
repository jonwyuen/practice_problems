function steps(n) {
  for (let i = 0; i < n; i++) {
    let temp = "";
    for (let j = 0; j < n; j++) {
      if (j <= i) temp += "#";
      else temp += "";
    }
    console.log(temp);
  }
}

function steps(n, row = 0, stair = "") {
  if (n === row) return;
  if (n === stair.length) {
    console.log(stair);
    return steps(n, ++row);
  }

  if (stair.length <= row) stair += "#";
  else stair += " ";

  steps(n, row, stair);
}
