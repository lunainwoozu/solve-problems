const fs = require('fs');
const n = Number(fs.readFileSync(0));

let arr = [];
let sum = 0;

for (let i = 1; i <= n / 2; i++) {
    if (n % i == 0) {
        arr.push(i);
    }
}

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

if (sum === n) {
    console.log('P');
} else {
    console.log('N');
}