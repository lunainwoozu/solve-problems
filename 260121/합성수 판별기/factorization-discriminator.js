const fs = require('fs');
const N = Number(fs.readFileSync(0));

let noc = 'N';

for (let i = 2; i < N; i++) {
    if (N % i === 0) {
        noc = 'C';
        break;
    }
}

console.log(noc);