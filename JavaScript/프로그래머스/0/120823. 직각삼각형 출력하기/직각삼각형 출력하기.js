const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for (let i = 1; i <= input; i++){
        str = "";
        for (let j = 1; j <= i; j++){
            str += "*";
        }
        console.log(str);
    }
});