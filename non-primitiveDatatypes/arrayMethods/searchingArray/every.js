//  every method test that all elements meet the condition

const products = [
    { name: "Playstation", inStock: true, amt: "$100"},
    { name: "airpods", inStock: false, amt: "$50"},
    { name: "console", inStock: true, amt: "$70"},
]

const outOfStock = products.every(product => product.inStock && product.inStock);
console.log(outOfStock);