const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

    let newO = {};
    newO.turns = Math.pow(2,disksNumber) - 1;
    newO.seconds = Math.floor(newO.turns * 3600 / turnsSpeed);
    return newO;
    //console.log(obj.turns);
      //throw new CustomError('Not implemented');
      // remove line with error and write your code here
    }

  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

