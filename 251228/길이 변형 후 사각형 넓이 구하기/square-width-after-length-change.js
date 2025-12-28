const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

let [a,b] = input.map(Number);

a += 8;
b *= 3;

console.log(a);
console.log(b);
console.log(a * b)