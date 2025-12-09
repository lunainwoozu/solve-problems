const fs = require("fs");
let numbers = fs.readFileSync(0).toString().trim().split('\n');

let a = Number(numbers[0]);
let b = Number(numbers[1]);
let c = Number(numbers[2]);

console.log(a.toFixed(3))
console.log(b.toFixed(3))
console.log(c.toFixed(3))