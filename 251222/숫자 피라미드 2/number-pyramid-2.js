const fs = require('fs');
let n = Number(fs.readFileSync(0));

for (let i = 0; i < n; i++){
    let result = '';
    for (let j = 1; j <= i + 1; j++){
        result += i + j;
        if (j <= i) result += " ";
    }
    console.log(result);
}