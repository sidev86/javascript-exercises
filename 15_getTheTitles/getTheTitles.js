const getTheTitles = function (books) {
  return books.map((book) => book.title);
};

const books = [
  {
    title: "Il codice da vinci",
    author: "Dan Brown",
  },
  {
    title: "I Promessi Sposi",
    author: "Alessandro Manzoni",
  },
];

console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
