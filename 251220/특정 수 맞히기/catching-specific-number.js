const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let array = input.map(Number);
let i = 0;

while (true){
    if (array[i] < 25){
        console.log('Higher');
        i++;
    } else if (array[i] > 25){
        console.log('Lower');
        i++;
    } else if (array[i] === 25){
        console.log('Good');
        break;
    }
}