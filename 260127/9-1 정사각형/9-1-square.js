const fs = require("fs");
const n = Number(fs.readFileSync(0));

let cnt = 9;

for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 0; j < n; j++) {
        str += cnt;
        cnt--;
        if (cnt === 0) cnt = 9;
    }
    console.log(str);
}