const fs = require('fs');
const n = Number(fs.readFileSync(0));

for (let i = n; i > 0; i--) {
    str = "";
    for (let j = 0; j < i; j++) {
        str += "* ";
    }
    console.log(str);
}