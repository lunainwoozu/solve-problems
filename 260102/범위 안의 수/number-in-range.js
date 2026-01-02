const fs = require('fs');
const a = Number(fs.readFileSync(0));

console.log(a >= 1 && a <= 20 ? 'yes' : 'no');