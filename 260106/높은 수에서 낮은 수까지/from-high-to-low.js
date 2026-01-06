const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

if(a > b){
    for(let i = a; i >= b; i--){
        process.stdout.write(i + ' ');
    }
} else {
    for(let i = b; i >= a; i--){
        process.stdout.write(i + ' ');
    }
}