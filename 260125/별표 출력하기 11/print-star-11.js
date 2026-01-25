const fs = require("fs");
const n = Number(fs.readFileSync(0));

for (let i = 0; i < n * 2 + 1; i++) {
    for (let j = 0; j < n * 2 + 1; j++) {
        if (i % 2 === 0 || j % 2 === 0) {
            process.stdout.write("* ");
        } else {
            process.stdout.write("  ");
        }
    }
    console.log();
}