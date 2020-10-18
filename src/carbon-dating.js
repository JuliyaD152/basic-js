const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (sampleActivity !== 'string') return false;

    let newsampleActiveity = Number(sampleActivity);
    if (typeof newsampleActiveity !== 'number' || newsampleActiveity > MODERN_ACTIVITY || newsampleActiveity < 0) return false;

    const constK = 0.693/HALF_LIFE_PERIOD;
    return Math.ceil(Math.log(MODERN_ACTIVITY/newsampleActiveity)/constK);
  
};
