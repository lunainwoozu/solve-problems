const fs = require('fs');
const [A, B, C] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(A + B + C);
console.log(parseInt((A + B + C) / 3))