// filter is an array method that filters elements / objects given certain conditions

let fruitArray = ["APPLE", "banana", "cherry"];

const filteredFruitArray = fruitArray.filter(elts => elts === elts.toLowerCase());

console.log(filteredFruitArray);

// ['banana', 'cherry']


let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbersArray = numbersArray.filter(num => num < 5);

console.log(filteredNumbersArray);


// ===, >. <, == , 

let num = 5
console.log(num === '5')