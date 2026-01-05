const fs = require('fs');
const n = Number(fs.readFileSync(0));

for(let i = 1; i < 6; i++){
    process.stdout.write(n * i + ' ');
}