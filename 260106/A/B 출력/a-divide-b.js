const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let result = '';
result += parseInt(a / b) + '.';

a %= b;
for (let i = 1; i <= 20; i++){
    a *= 10;
    result += parseInt(a / b)
    a %= b;
}

console.log(result);