const fs = require('fs');
const n = Number(fs.readFileSync(0));

for(let i = 1; i <= n; i++){
    let row = [];
    for (let j = 1; j <= n; j++){
        row.push(j);
    }

    let result = "";
    if (i % 2 === 0){
        for (let j = n - 1; j >= 0; j--){
            result += row[j];
        }
    } else {
        for (let j = 0; j < n; j++){
            result += row[j]
        }
    }
    console.log(result);
}