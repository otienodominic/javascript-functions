const { newExpression } = require("jscodeshift")

let neighbours = [1,3,5,6,5,5,9]
// neighbours.filter(a => a>5)
// console.log(neighbours)
// neighbours.map(a => console.log(a))
// neighbours.forEach(a => console.log(a))
// neighbours.some(a => console.log(a))
console.log(neighbours.splice(1,3))