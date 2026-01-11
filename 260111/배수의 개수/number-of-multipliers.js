const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let c3 = 0;
let c5 = 0;

for (let i = 0; i < 10; i++) {
    if (input[i] % 3 === 0 && input[i] % 5 === 0){
        c3++;
        c5++;
    } else if (input[i] % 3 === 0) {
        c3++;
    } else if (input[i] % 5 === 0) {
        c5++;
    }
}

console.log(c3, c5);