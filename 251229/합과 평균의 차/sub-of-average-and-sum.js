const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sum = a + b + c;
let average = sum / 3;

console.log(sum);
console.log(parseInt(average));
console.log(sum - parseInt(average));