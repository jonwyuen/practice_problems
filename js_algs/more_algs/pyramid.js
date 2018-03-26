function pyramid(n) {
  const mid = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = "";
    for (let col = 0; col < 2 * n - 1; col++) {
      if (mid - row <= col && mid + row >= col) level += "#";
      else level += " ";
    }
    console.log(level);
  }
}

function pyramid(n, row = 0, level = "") {
  if (row === n) return;

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, ++row);
  }

  const mid = Math.floor((2 * n - 1) / 2);
  // determine which col on by length of level
  if (mid - row <= level.length && mid + row >= level.length) {
    return pyramid(n, row, (level += "#"));
  } else {
    return pyramid(n, row, (level += " "));
  }
}

pyramid(3);
/*

  #  
 ###
#####

*/

function pyramid(n, row = 0, level = "") {
  if (row === n) return;

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, ++row);
  }

  const mid = Math.floor((2 * n - 1) / 2);
  // determine which col on by length of level
  if (mid - row <= level.length && mid + row >= level.length) {
    return pyramid(n, row, (level += "#"));
  } else {
    return pyramid(n, row, (level += " "));
  }
}
