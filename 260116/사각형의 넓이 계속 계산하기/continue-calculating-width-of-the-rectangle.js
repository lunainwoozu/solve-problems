const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let i = 0;

while (true) {
    let arr = input[i].split(' ');
    console.log(arr[0] * arr[1]);
    i++;
    if (arr[2] === 'C') {
        break;
    }
}