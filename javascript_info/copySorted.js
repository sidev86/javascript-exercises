function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "CSS", "Javascript"];

let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);
