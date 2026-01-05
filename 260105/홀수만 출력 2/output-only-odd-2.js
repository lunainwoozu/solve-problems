const fs = require('fs');
const [b, a] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

for(let i = b; i >= a; i -= 2){
    process.stdout.write(i + ' ');
}