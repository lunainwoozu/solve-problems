const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const f = input[0].split(' ');
const s = input[1].split(' ');
const t = input[2].split(' ');

const array = [f, s, t];

let cnt = 0;

for(let i = 0; i < 3; i++){
    if(array[i][0] === 'Y' && array[i][1] >= 37){
        cnt++;
    }
}

if(cnt >= 2){
    console.log('E');
} else {
    console.log('N');
}