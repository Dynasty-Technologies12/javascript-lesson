// person is an object
const person = {
    name: "Temitope",
    age: 35,
    job: "Principal Software Engineer",
}

console.log(person.job); // Accessing property using dot notation

// person 2 is an object
// when the plus + is used with strings , it is called concatenation
const person2 = {
    name: "John",
    age: 30,
    job: "Data Scientist",
    greet: function() {
        console.log("Hello, my name is "+ this.name + " and I am " + this.age + " years old.");
    }
}

person2.greet();
console.log(person2.age)