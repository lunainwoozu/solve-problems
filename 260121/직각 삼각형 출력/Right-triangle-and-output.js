const fs = require('fs');
const n = Number(fs.readFileSync(0));

for (let i = 1; i <= n; i++) {
    str = "";
    for (let j = 1; j < i * 2; j++) {
        str += "*";
    }
    console.log(str);
}