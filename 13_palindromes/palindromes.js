const palindromes = function (str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};

// Do not edit below this line
module.exports = palindromes;
