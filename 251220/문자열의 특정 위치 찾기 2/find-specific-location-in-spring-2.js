const fs = require('fs');
const spelling = fs.readFileSync(0).toString().trim();
const word = ["apple", "banana", "grape", "blueberry", "orange"];
let count = 0;

for (let i = 0; i < word.length; i++){
    if (word[i].includes(spelling) && word[i].indexOf(spelling) !== 0){
        console.log(word[i]);
        count++;
    }
}

console.log(count);