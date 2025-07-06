// forEach array methods , loops / iterate through an array and performs a function on each element of the array
// Array.prototype.forEach()

let fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruits) => {
  console.log(fruits.toUpperCase());
});
console.log(fruits);

fruits.forEach((fruits, index) => {
  console.log(`${index--}. ${fruits}`);
});

// ${index + 1} = index + 1
// index = index + 1
// incrementing and decrementing the index
// index++ incrementing the valie of the index by one
// index-- decrementing the value of the index by one

// 1. apple

let num = [1, 2, 3, 4, 5];
num.forEach((num) => {
  laargeNum = num > 6;
});

console.log(laargeNum);

let colors = ["red", "green", "blue"];

colors.forEach((color) => {
  uniqueColor = color === "white";
});

console.log(uniqueColor)
