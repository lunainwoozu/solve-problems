const fs = require('fs');
const n = Number(fs.readFileSync(0));

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i + 1; j++) {
        process.stdout.write('* ');
    }
    console.log();
    for (let j = 0; j < i; j++) {
        process.stdout.write('* ');
    }
    console.log();
}