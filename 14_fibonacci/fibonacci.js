const fibonacci = function (memberIndex) {
  let member = 0;
  let prev1 = 1;
  let prev2;
  if (memberIndex < 0) {
    return "OOPS";
  }
  for (let i = 0; i < memberIndex; i++) {
    prev2 = member;
    member += prev1;
    prev1 = prev2;
  }
  return member;
};

console.log(fibonacci(0));
// Do not edit below this line
module.exports = fibonacci;
