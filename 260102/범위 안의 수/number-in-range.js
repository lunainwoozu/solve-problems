const fs = require('fs');
const a = Number(fs.readFileSync(0));

if (1 =< a && a =< 20) {
    console.log('yes');
} else {
    console.log('no');
}