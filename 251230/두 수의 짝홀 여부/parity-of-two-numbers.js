const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(a % 2 === 0 ? 'even' : 'odd');
console.log(b % 2 === 0 ? 'even' : 'odd');