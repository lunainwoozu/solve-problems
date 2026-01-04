const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let cnt = 0;

input.map(i => {
    const [q, temp] = i.split(' ');
    if(q === 'Y' && temp >= 37){
        cnt++;
    }
});

if(cnt >= 2){
    console.log('E');
} else {
    console.log('N');
}