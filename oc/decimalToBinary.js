// Given an integer in base 10, return its value as a string in binary (aka base 2)
// Input: int { Integer }
// Output: { String }

// Example
// Input: 5 => Output: “101”
// Input: 39 => Output: “10011”
// Input: 157 => Output: “10011101”

// Constraints
// Time Complexity: O(log N)
// Auxiliary Space Complexity: O(log N)

function decimalToBinary(int) {
  let exponent = 0;
  let result = '';

  while(2**exponent * 2 < int) {
    exponent++;
  }

  while(int > 0) {
    let num = 2**exponent;
    if (int >= num){
      int -= num;
      result += 1;
    } else {
      result += 0;
    }
    exponent--;
  }

  return result;
}
