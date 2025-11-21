const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(" ");

let newArr = []

arr.forEach((n) => {
    let m = Number(n)
    if (m !== 0){
        newArr.push(m)
    } else {
        return;
    }
})

console.log(newArr.reverse().join(" "));
