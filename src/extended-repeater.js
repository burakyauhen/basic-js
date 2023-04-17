const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/* str, options */ str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = [];
  if (!options.separator) options.separator = '+';
  if (!options.addSeparator) options.addSeparator = '||';
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (options.addition) {
    if (options.additionRepeatTimes) {
      str = str + options.addition.repeat(options.additionRepeatTimes);
    } else {
      str = str + options.addition;
    }
  }
  for (let i = 0; i < options.repeatTimes; i++){
    if (options.addition) {
    }
    if (i < options.repeatTimes - 1) {
      arr.push(`${str}${options.separator}`);
    } else {
      arr.push(`${str}`);

    }
  }
  return arr.join('');
  }

module.exports = {
  repeater
};
