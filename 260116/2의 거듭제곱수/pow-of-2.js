const fs = require('fs');
const n = Number(fs.readFileSync(0));

let i = 1;

while (true) {
    if (2 ** i !== n) {
        i++;
    } else {
        console.log(i);
        break;
    }
}