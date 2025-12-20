const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let number = input.map(Number);
let x3 = 0;
let x5 = 0;

for (let i = 0; i < number.length; i++){
    if (number[i] % 3 === 0 && number[i] % 5 === 0){
        x3++;
        x5++;
    } else if (number[i] % 5 === 0){
        x5++;
    } else if (number[i] % 3 === 0) {
        x3++;
    } else {
        continue;
    }
}

console.log(x3, x5)