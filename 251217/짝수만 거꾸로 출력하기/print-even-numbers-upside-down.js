const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let N = Number(input[0]);
let array = input[1].split(' ');

let numbers = array.map(n => Number(n))
let newNumbers = []

for (let i = 0; i < array.length; i++){
    if (numbers[i] % 2 === 0){
        newNumbers.push(numbers[i]);
    }
}

console.log(newNumbers.reverse().join(' '))