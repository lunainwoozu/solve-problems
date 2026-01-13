const fs = require('fs');
let n = Number(fs.readFileSync(0));

let cnt = 0;

for (let i = 1; i <= 5000; i++) {
    n = Math.floor(n / i);
    cnt++;
    if (n <= 1) {
        console.log(cnt);
        break;
    }
}