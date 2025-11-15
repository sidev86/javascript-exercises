function unique(arr) {
  let arrUnique = [];
  arr.map((item) => {
    if (!arrUnique.includes(item)) {
      arrUnique.push(item);
    }
  });
  return arrUnique;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(strings));
