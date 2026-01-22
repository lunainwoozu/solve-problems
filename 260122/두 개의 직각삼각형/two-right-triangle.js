const fs = require('fs');
const n = Number(fs.readFileSync(0));

for (let i = 0; i < n; i++) {
    str = '';
    for (let j = i; j < n; j++) {
        str += '*';
    }
    for (let j = 0; j < i * 2; j++) {
        str += ' ';
    }
    for (let j = i; j < n; j++) {
        str += '*';
    }
    console.log(str);
}