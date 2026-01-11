const fs = require('fs');
const n = Number(fs.readFileSync(0));

let result = '';

for (let i = 1; i < n + 1; i++){
    if (i % 3 === 0 || i.toString().includes('3') || i.toString().includes('6') || i.toString().includes('9')){
        result += 0 + ' ';
    } else {
        result += i + ' ';
    }
}

console.log(result);