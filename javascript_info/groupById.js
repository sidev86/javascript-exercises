function groupById(users) {
  usersObj = {};
  users.map((user) => {
    usersObj[user.id] = { id: user.id, name: user.name, age: user.age };
  });
  return usersObj;
}

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);

console.log(usersById);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
