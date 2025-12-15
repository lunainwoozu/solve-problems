const fs = require('fs');
let array = fs.readFileSync(0).toString().trim().split(' ');

let newArray = array.reverse();

console.log(newArray.join(''))