const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('-');

let [yyyy, mm, dd] = [input[2], input[0], input[1]];

console.log(`${yyyy}.${mm}.${dd}`)