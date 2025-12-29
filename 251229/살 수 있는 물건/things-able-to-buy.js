const fs = require('fs');
const N = Number(fs.readFileSync(0));

if (N >= 3000){
    console.log('book');
} else if (N >= 1000){
    console.log('mask');
} else {
    console.log('no');
}