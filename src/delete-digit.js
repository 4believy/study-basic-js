const { NotImplementedError } = require('../extensions/index.js');

//========================
// DONE
//========================

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
function deleteDigit(n) {
  let numberArr = []
  n = n.toString();
  
  for(let i = 0; i < n.length; i++){
    let localN = n;
    numberArr.push(+localN.replace(n[i],''))
  } 

  return Math.max(...numberArr)
}

module.exports = {
  deleteDigit
};
