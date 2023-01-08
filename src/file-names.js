const { NotImplementedError } = require('../extensions/index.js');

//========================
// DONE
//========================

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names) {
  for( let i = 0; i < names.length; i++){
    let equalsCounter = 1;
    while ( names.indexOf(names[i], i + 1) != -1){
      names[names.indexOf(names[i], i + 1)] +=`(${equalsCounter})`
      equalsCounter++
    }
  }
  return names
}

// console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']));
module.exports = {
  renameFiles
};
