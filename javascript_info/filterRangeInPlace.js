function filterRangeInPlace(arr, min, max) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min || arr[i] > max) {
      arr.splice(i, 1);
      i = 0;
    }
  }
}

arr = [2, 12, 4, 7, 8, 22, 1, 6, 5, 22, 23, 5];

filterRangeInPlace(arr, 2, 8);

console.log(arr);
