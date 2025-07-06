// findIndex returns the index of the first elt that satisfies the test function or -1

const evenNumbers = [2, 4, 6, 8, 10];

const indexNumber = evenNumbers.findIndex((evenNumber) => evenNumber > 10);
console.log(indexNumber);

const tasks = [
  { id: 1, title: "design the landing page", completed: true },
  { id: 2, title: "integrate the endpoints", completed: false },
  { id: 3, title: "develop the contact page", completed: true },
];

const indexTask = tasks.findIndex(task => task.title === "develop the contact page")
console.log(indexTask);




