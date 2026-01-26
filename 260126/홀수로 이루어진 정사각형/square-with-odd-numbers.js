const fs = require("fs");
const n = Number(fs.readFileSync(0));


for (let i = 0; i < n * 2; i += 2) {
    str = "";
    for (let j = 11; j < n * 2 + 11; j += 2) {
        str += j + i + " ";
    }
    console.log(str);
}