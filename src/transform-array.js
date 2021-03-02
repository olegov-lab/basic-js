const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {

    if (!Array.isArray(array)) {
        throw new Error();
        }

    let arr = array.slice();

    let dcNext = '--discard-next',
        dcPrev = '--discard-prev',
        dbNext = '--double-next',
        dbPrev = '--double-prev';

    for (let i = 0; i < arr.length; i++) {

    if ( (i == 0) && (arr[i] === dcPrev || arr[i] === dbPrev) ) {
    continue;
    } else if ( (i == arr.length - 1) && (arr[i] === dcNext || arr[i] === dbNext) ) {
    continue;
    } else if (arr[i] == dcNext) {
        arr.splice(i + 1, 1);
    } else if (arr[i] == dcPrev) {
        arr.splice(i - 1, 1);
        i--;
    } else if (arr[i] == dbNext) {
        arr.splice(i + 1, 0, arr[i + 1]);
    } else if (arr[i] == dbPrev) {
        arr.splice(i - 1, 0, arr[i - 1]);
        i++;
    }
    }

    for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] == dcNext || arr[i] == dcPrev || arr[i] == dbNext || arr[i] == dbPrev ) {
    arr.splice(i,1);
    i--;
    }
    }
    return arr;
    };
