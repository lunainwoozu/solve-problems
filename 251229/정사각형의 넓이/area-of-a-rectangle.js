const fs = require('fs');
const N = Number(fs.readFileSync(0));

console.log(N * N);
if(N < 5) console.log('tiny');