function compareNumeric(a, b) {
  if (a > b) return -1;
  if (a === b) return 0;
  if (a < b) return 1;
}

let arr = [2, 3, 5, 12, 1];

arr.sort(compareNumeric);

console.log(arr);
