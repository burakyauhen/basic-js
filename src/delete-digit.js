const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/* n */ n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let max = 0;
  let arr = String(n).split(''); 
  for (let i = 0; i < arr.length; i++) {
    let arr2 = arr.slice();
    arr2.splice(i, 1);
    let number = Number(arr2.join(''));
    if (number > max) max = number; 
  }
  return max;
}

module.exports = {
  deleteDigit
};
