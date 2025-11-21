const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(" ");

let add = 0;
let leng = 0;

for (let a of input){
    let b = Number(a);
    if (b !== 0){
        add += b;
        leng += 1;
    } else {
        break;
    }
}

let ave = (add / leng).toFixed(1);

console.log(add, ave)