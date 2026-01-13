const fs = require('fs');
const n = Number(fs.readFileSync(0));

let sum = 0;

for (let i = 1; i < 101; i++) {
    sum += i;
    if (sum >= n) {
        console.log(i);
        break;
    }
}