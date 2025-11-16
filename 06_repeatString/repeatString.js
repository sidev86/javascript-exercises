const repeatString = function (str, repetitions) {
  if (repetitions < 0) {
    return "ERROR";
  }
  repeatedStr = "";
  for (let i = 0; i < repetitions; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
