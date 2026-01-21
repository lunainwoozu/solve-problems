const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let yon = 'NO';

for (let i = a; i <= b; i++) {
    if (i % c === 0) {
        yon = 'YES';
        break;
    }
}

console.log(yon);