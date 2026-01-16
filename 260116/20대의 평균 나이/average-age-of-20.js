const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let sum = 0;
let cnt = 0;

for (let i = 0; i < input.length; i++) {
    if (Math.floor(input[i] / 10) === 2) {
        sum += input[i];
        cnt++;
    } else {
        console.log((sum / cnt).toFixed(2));
        break;
    }
}