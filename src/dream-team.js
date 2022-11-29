const { NotImplementedError } = require('../extensions/index.js');

//========================
// DONE
//========================

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members)) return false
  return members.filter(item => typeof(item) == 'string')
                .map(item => {
                item= item.trim().toUpperCase()
                return item[0]})
                .sort()
                .join('')
}

module.exports = {
  createDreamTeam
};
