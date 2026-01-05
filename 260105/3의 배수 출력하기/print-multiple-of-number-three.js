const fs = require('fs');
const n = Number(fs.readFileSync(0));

let i = 1;

while (i <= n){
    if(i % 3 === 0){
        process.stdout.write(i + ' ');
    }
    i++;
}