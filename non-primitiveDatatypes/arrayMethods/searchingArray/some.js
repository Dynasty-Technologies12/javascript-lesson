// The some tests if at least one element meets a particular condition

const products = [
    { name: "Playstation", inStock: true, amt: "$100"},
    { name: "airpods", inStock: false, amt: "$50"},
    { name: "console", inStock: true, amt: "$70"},
]

const outOfStock = products.some(product => !product.inStock);
console.log(outOfStock)


// && -- logical AND
// ! -- logical NOT
// || -- logical OR


