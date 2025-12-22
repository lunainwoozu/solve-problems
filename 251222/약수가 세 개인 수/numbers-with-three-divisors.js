const fs = require('fs');
let [start, end] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let result = 0;

for (let i = start; i <= end; i++){
    let condition = 0;
    for (let j = 1; j <= i; j++){
        if (i % j === 0){
            condition++;
        }
    }
    if (condition === 3){
        result++;
    }
}

console.log(result)