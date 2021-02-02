const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if ((sampleActivity == 0) || (sampleActivity == undefined) || isNaN(sampleActivity)
  || (typeof sampleActivity == 'number') || (sampleActivity > 15)
  || (sampleActivity < 0) || (Array.isArray(sampleActivity))) {
    return false;
  } else {
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.ceil(Math.log((MODERN_ACTIVITY / sampleActivity )) / k);
  return t;
  }

}
