/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // Create a mapping of Roman numerals to their integer values
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    // If the current value is less than the next value, subtract it from the total
    if (i < s.length - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
      total -= romanMap[s[i]];
    } else {
      total += romanMap[s[i]];
    }
  }

  return total;
};

module.exports = { romanToInt };
