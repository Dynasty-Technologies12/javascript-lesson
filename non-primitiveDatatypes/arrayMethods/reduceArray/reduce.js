// note that the reduce array is not about reducing the array to a single value, but rather to a single object
// reduce array method is used to reduce an array to a single value(summing)
// callback --  a callback is a function
// accumulator -- the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
// currentValue



// iteration process is known as looping

// syntax of a reduce array method
// array.reduce(callback, initialValue)

// callback function consists of 4 parameters
// callback(accumulator, currentValue, currentIndex, array)

// array.reduce(accummulator, currentValue, currentIndex, array, initialValue)

// first example

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = num.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(sum);

// finding the maximum/minimum value in an array using reduce method

const randomNumbers = [5, 12, 8, 130, 44];
const minValue = randomNumbers.reduce((accumulator, currentValue) => {
   return Math.min(accumulator, currentValue)

 }, 13);

console.log(minValue);


//count the number of occurences of elements 
const fruits = ["apple", "banana", "orange", "apple", "banana", "apple", "kiwi", "banana", "kiwi", "strawberry", "pear"];
const fruitCount = fruits.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;  
        return accumulator;
}, {});

console.log(fruitCount);


// ternary operators -- Dog ? Alstitian : kukuke





