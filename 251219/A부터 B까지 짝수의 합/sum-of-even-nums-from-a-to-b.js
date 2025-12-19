const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');

let A = Number(input[0]);
let B = Number(input[1]);
let n = 0;

for (let i = A; i < B + 1; i++){
    if (i % 2 === 0){
        n += i;
    }
}

console.log(n)