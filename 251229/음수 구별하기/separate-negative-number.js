const fs = require('fs');
const N = Number(fs.readFileSync(0));

console.log(N)
if (N < 0) console.log('minus')