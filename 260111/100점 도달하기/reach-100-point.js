const fs = require('fs');
const n = Number(fs.readFileSync(0));

let i = n;
let result = '';

while (i <= 100){
    if (i >= 90){
        result += 'A ';
    } else if (i >= 80) {
        result += 'B ';
    } else if (i >= 70) {
        result += 'B ';
    } else if (i >= 60) {
        result += 'B ';
    } else {
        result += 'F ';
    }
    i++;
}

console.log(result);