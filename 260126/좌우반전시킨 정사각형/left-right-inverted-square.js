const fs = require("fs");
const n = Number(fs.readFileSync(0));

let start = n;

for (let i = 0; i < n; i++) {
    num = start;
    cnt = 0;
    str = "";
    for (let j = 0; j < n; j++) {
        str += num - j - cnt + " ";
        cnt += i;
    }
    console.log(str);
    start += n;
}