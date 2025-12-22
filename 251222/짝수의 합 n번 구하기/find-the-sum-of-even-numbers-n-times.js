const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

for(let i = 0; i < n; i++){
    let [a,b] = input[i+1].split(' ').map(Number);
    let result = 0;
    for(let j = a; j <= b; j++){
        if(j % 2 === 0){
            result += j;
        }
    }
    console.log(result)
}