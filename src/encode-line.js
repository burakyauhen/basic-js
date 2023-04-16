const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(/* str */ str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = str.split('');
  let arr1 = [];
  while (arr.length > 0) {
   let i = 1;
   while(arr[0] === arr[i]) {
     i++;
   }
   arr1.push(arr.splice(0, i).join(''));
  } 
 
  return arr1.map(function(item) {
   if (item.length > 1) {
     return item.length + item[0];
   } else {
     return item[0];
   }
 }).join('');
}

module.exports = {
  encodeLine
};
