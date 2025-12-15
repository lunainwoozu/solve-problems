const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

if (a > b && a > c){
    if (b > c){
        console.log(b);
    } else {
        console.log(c);
    }
} else if (a > b) {
    if (c > a){
        console.log(a);
    } else {
        console.log(c);
    }
} else {
    if (c > b){
        console.log(b)
    } else {
        console.log(c)
    }
}