function filterRange(arr, min, max) {
  return arr.filter((val) => val >= min && val <= max);
}

console.log(filterRange([1, 12, 4, 23, 8, 6], 2, 6));
