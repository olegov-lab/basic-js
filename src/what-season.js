const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
    }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
      throw new Error();
  }
    //let now = new Date(2000, 8, 20);
    //alert( now );
    let month = date.getMonth();
    //alert(month);

    if ((month == 0) || (month == 1) || (month == 11)) {
    //alert('winter');
    return 'winter';
    } else if ((month == 2) || (month == 3) || (month == 4)) {
    //alert('spring');
    return 'spring';
    } else if ((month == 5) || (month == 6) || (month == 7)) {
    //alert('summer');
    return 'summer';
    } else {
    //alert('autumn');
    return 'autumn';
    }
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
}
