const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let resultA = 0;
let resultB = 0;

if (b - a >= 0 && c - a >= 0){
    resultA = 1;
}

if (a == b == c){
    resultB = 1;
}

console.log(resultA, resultB)