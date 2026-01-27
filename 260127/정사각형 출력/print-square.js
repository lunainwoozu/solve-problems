const fs = require("fs");
const n = Number(fs.readFileSync(0));

let cnt = 1;

for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 0; j < n; j++) {
        str += cnt + " ";
        cnt++;
    }
    console.log(str);
}