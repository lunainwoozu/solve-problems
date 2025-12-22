const fs = require('fs');
let n = Number(fs.readFileSync(0));

let cnt = 1;

for (let i = 1; i <= n; i++){
    let result = "";
    for (let j = 1; j <= i; j++){
        result += cnt + " ";
        cnt++;
    }
    console.log(result);
}