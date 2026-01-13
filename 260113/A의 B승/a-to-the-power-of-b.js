const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let prod = a;

for (let i = 0; i < b - 1; i++) {
    if (b === 0) break;
    prod = prod * a;
}

console.log(prod);