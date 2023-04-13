const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */ arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    if (!(arr instanceof Array)) throw new Error ("'arr' parameter must be an instance of the Array!");

    let myArr = arr.slice();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--double-prev') {
        if (myArr[i - 1]) {
          myArr[i] = myArr[i - 1]
        } else 
        myArr[i] = null;
      }

      if (arr[i] === '--discard-prev') {
        if (myArr[i - 1]) {
          myArr[i - 1] = null;
        }
        myArr[i] = null;
     }

      if (arr[i] === '--discard-next') {
        if (myArr[i + 1]) {
         myArr[i + 1] = null;
       }
       myArr[i] = null;
      }

      if (arr[i] === '--double-next') {
        if (myArr[i + 1]) {
          myArr[i] = myArr[i + 1]
        } else 
        myArr[i] = null;
      }
    }
    return myArr.filter((item) => (typeof item === 'number' || item instanceof Object) || typeof item === 'string' || typeof item === 'boolean');
 
}

module.exports = {
  transform
};
