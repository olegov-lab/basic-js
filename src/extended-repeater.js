const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {
repeatTimes = 1,
separator = '+',
addition = '',
additionRepeatTimes = 1,
additionSeparator = '|',
}) {

  str = String(str);
  let strBuffer = str;

  if (addition !== undefined) {
    addition = String(addition);
    let additionBuffer = addition;

    for (let i = 1; i < additionRepeatTimes; i++) {
      addition = addition + additionSeparator + additionBuffer;
    }
    str = str + addition;
    strBuffer = str;
    }

    for (let i = 1; i < repeatTimes; i++) {
      str = str + separator + strBuffer;
    }
    return str;
  };


