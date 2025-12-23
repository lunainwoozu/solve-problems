const fs = require('fs');
const n = Number(fs.readFileSync(0));

for(let i = 1; i <= n; i++){
    let result = "";
    if (i % 2 === 0){
        for (let j = n; j >= 1; j--){
            result += j;
        }
    } else {
        for (let j = 1; j <= n; j++){
            result += j;
        }
    }
    console.log(result);
}