const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let sum = 0;

for (let i = 0; i < 4; i++){
    let row = input[i].split(' ').map(Number);
    for (let j = 0; j <= i; j++){
        sum += row[j];
    }
}

console.log(sum)