const animals = ["rat", "rodents", "cats", "dog"];

//  arrays are zero-indexed, starts with 0, except you are being told the index to start with
// find type of searching array returns the first element that satisfies the provided testing function

const users = [
  { id: 1, name: "temitope" },
  { id: 2, name: "Samuel" },
  { id: 3, name: "adeola" },
]

// declare a variable and initialise the variable
const user = users.find(user => user.id === 1 );
console.log(user);
console.log(users.find(user => user.id === 3 ))


