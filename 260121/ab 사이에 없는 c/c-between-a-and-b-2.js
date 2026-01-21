const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let result = true;

for (let i = a; i <= b; i++) {
    if (i % c === 0) {
        result = false;
        break;
    }
}

if (result) {
    console.log('YES');
} else {
    console.log('NO');
}