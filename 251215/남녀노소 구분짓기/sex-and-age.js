const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let [a,b] = input[0].split(' ');
let [c,d] = input[1].split(' ');

if (c >= 19){
    if (a == 0){
        console.log('MAN');
    } else {
        console.log('WOMAN');
    }
} else {
    if (a == 0){
        console.log('BOY');
    } else {
        console.log('GIRL');
    }
}