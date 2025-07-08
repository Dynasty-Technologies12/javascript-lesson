//sorting is an array method that modifies the original array and it falls under mutations
// mutation means the ability of sth to change  opposite is immutation.
// how do one write the basic syntax of a sorting array method

// array.sort([compareFunction])

// sort numbers

const num = [ 11, 20, 50, 65, 76, 119, 120, 117, 110, 1203];

const sortedArray = num.sort((a, b) => b - a);

console.log(sortedArray);

// a => first number 
// b => preceeding number


const studNames = ["Tayo", "Bayo", "Boyo", "MOYO", "Oluwaseun", "YAMAL", "ronaldo", "Saka" ]

// const sortedStudName = studNames.sort((a, b) => b.toLowerCase() - (a.toLowerCase()));
const sortedStudName = studNames.sort((a, b) => a.toUpperCase() - (b.toUpperCase()));

console.log(sortedStudName);

// reverse the str

const str = "amalgamation";
//  split , spliting the string into array
//  array = ["a", "m", "a"]

const charArray = str.split("");
console.log(charArray);

const sortedCharArray = charArray.sort();
console.log(sortedCharArray);


//   using reverse() method
const reverseSortedCharArray = sortedCharArray.reverse();
console.log(reverseSortedCharArray);


const reverseSortedCharArrayToString = reverseSortedCharArray.join("");
console.log(reverseSortedCharArrayToString);





