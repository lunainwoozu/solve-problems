const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let array = input.map(Number);

for (let i = 0; i < array.length; i++){
    if (array[i] !== 0){
        console.log(array[i])
    } else {
        break;
    }
}