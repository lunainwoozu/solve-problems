const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let prod = a;

if (b === 0) {
    console.log(prod);
} else {
    console.log(a ** b);
}