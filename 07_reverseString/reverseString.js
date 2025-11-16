const reverseString = function (str) {
  reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
};

//console.log(reverseString("ciao"));
// Do not edit below this line
module.exports = reverseString;
