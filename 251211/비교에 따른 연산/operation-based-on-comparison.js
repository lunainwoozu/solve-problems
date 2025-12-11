const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let a = input[0];
let b = input[1];

if (a > b === true) {
    console.log(a*b)
} else {
    console.log(Math.floor(b/a))
}