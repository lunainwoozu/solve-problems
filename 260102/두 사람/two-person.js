const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [aA, sA] = input[0].split(' ');
const [aB, sB] = input[1].split(' ');

if ((aA >= 19 && sA == 'M') || (aB >= 19 && sB == 'M')){
    console.log(1);
} else {
    console.log(0);
}