const fs = require('fs');
const input = Number(fs.readFileSync(0));

if (input % 4 === 0){
    if (input % 100 === 0 && input % 400 !== 0){
        console.log(false);
    } else {
        console.log(true);
    }
} else {
    console.log(false);
}