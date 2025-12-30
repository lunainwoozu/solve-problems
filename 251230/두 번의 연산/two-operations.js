const fs = require('fs');
let A = Number(fs.readFileSync(0));

if (A % 2 !== 0){
    A = A + 3;
}

if (A % 3 === 0){
    A = A / 3;
}

console.log(A)