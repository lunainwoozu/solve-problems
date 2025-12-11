const fs = require('fs');
const n = fs.readFileSync(0).toString().trim();
let s = 80 - n;

if (n >= 80){
    console.log("pass")
} else {
    console.log(s, "more score")
}