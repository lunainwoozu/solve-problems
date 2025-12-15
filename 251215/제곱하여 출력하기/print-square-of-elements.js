const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let N = Number(input[0]);
let string = input[1].split(' ');
let numbers = string.map(n => Number(n))
let result = [];

for (let i = 0; i < N; i++){
    result.push(numbers[i] ** 2)
}

console.log(result.join(' '));