const fs = require('fs');
const input = fs.readFileSync(0).toString().split(':');

const [h, m] = [Number(input[0]), Number(input[1])]

console.log(`${h + 1}:${m}`)