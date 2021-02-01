const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (!Array.isArray(matrix) || matrix.length == 0 || matrix == undefined) {
    return 0;
  }

  let count = 0;
  for (let cat of matrix.flat()) {

      if (cat == '^^') {
       count++ ;
      }
      } return count;
}
