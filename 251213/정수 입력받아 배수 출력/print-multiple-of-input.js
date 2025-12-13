const fs = require('fs');
let n = fs.readFileSync(0);

let result = '';

for (let i = 1; i < 6; i++){
    result += (n * i + ' ');
}

console.log(result);