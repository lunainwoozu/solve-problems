const fs = require('fs');
let n = Number(fs.readFileSync(0));

for(let i = 1; i <= n; i++){
    str = "";
    for(let j = 0; j < i * 2 - 1; j++){
        str += "*";
    }
    console.log(str);
}