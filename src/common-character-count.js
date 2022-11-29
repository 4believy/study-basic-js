const { NotImplementedError } = require('../extensions/index.js');

//========================
// DONE
//========================

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonsCount = 0
  for(let i = 0; i < s1.length; i++){
    console.log(s2)
    let searchIndex = s2.indexOf(s1[i])
    if(searchIndex > -1) {
     s2 = s2.replace(s1[i], '')
     commonsCount++
    }
  }
  return commonsCount
}

module.exports = {
  getCommonCharacterCount
};
