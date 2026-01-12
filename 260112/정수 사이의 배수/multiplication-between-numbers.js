const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sum = 0;
let num = 0;

for (let i = a; i <= b; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
        sum += i;
        num++;
    }
}

console.log(sum, (sum / num).toFixed(1));