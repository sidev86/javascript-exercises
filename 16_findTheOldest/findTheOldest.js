const findTheOldest = function (people) {
  let oldestPerson;
  let maxAge = 0;
  let age;
  for (person of people) {
    if (person.yearOfDeath !== undefined) {
      age = person.yearOfDeath - person.yearOfBirth;
    } else {
      const currentTime = new Date().getFullYear();
      age = currentTime - person.yearOfBirth;
    }

    if (age > maxAge) {
      maxAge = age;
      oldestPerson = person;
    }
  }
  return oldestPerson;
};

// const people = [
//   {
//     name: "Carly",
//     yearOfBirth: 1942,
//     yearOfDeath: 1970,
//   },
//   {
//     name: "Ray",
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//   },
//   {
//     name: "Jane",
//     yearOfBirth: 1912,
//     yearOfDeath: 1941,
//   },
// ];

//console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
