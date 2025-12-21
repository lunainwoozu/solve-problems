const fs = require('fs');
let n = Number(fs.readFileSync(0));

for(let i = 1; i <= n; i++){
    str = "";
    for(let j = 1; j <= n; j++){
        if(j === n){
            str += `${i} * ${j} = ${i * j}`;
        } else {
            str += `${i} * ${j} = ${i * j}, `;
        }
    }
    console.log(str);
}