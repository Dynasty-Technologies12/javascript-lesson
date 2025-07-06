let symbol = Symbol("description");
let symbol2 = Symbol("description");

console.log(symbol === symbol2); 


let objId = Symbol("id");


let obj = {
    [objId]: 12345,    //key-value pair
    name: "John Doe"
}

console.log(obj[objId]); 
console.log(obj.name);
