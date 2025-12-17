const fs = require('fs');
let word = fs.readFileSync(0).toString().trim();
let length = word.length;

let f = word.replace(word[1], "a");
let s = f.slice(0, length - 2) + "a" + f.slice(length - 1)

console.log(s)