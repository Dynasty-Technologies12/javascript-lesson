// map method transforms the elements of an array by applying a function to each element.

let fruits = ["apple", "banana", "cherry"];

// let upperCaseFruits = fruits.map(
// function (fruits) {
//   return fruits.toUpperCase();
// });

// console.log(upperCaseFruits);

// arrow function version of the above code
let upperCaseFruits = fruits.map(fruits => fruits.toUpperCase());

console.log(upperCaseFruits);


// const names = [temitope, samuel, dele]

const persons = [
   {name: "temitope", age: 35},
   {name: "samuel", age: 30},
   {name: "dele", age: 25}
];

// Using map to extract names from the person array
const userName = persons.map(person => person.name);
const userAge = persons.map(person => person.age);

console.log(userName); // Output: ["temitope", "samuel", "dele"]
console.log(userAge);

// id are unique values

const students = [
   {id: 1, name: "ola"},
   {id: 2, name: "tolu"},
   {id: 3, name: "ade"}, 
   {id: 4, name: "sade"}, 
   {id: 5, name: "tayo"}, 
   {id: 6, name: "dami"}, 
]

// Using map to extract ids from the students array
const studentIds = students.map(student => student.id);
console.log(studentIds);

// extract the name from the Id
const studentName = students.map(student => student.name);
console.log(studentName);








