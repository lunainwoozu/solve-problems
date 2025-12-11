const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let [a,b] = input;
let [m,n] = [0,0]

if (a < b === true) {
    m = 1;
}
if (a === b){
    n = 1;
}

console.log(m, n);