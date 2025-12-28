const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

let [A, B] = input.map(Number);

console.log(`${parseInt(A / B)}...${parseInt(A % B)}`)