const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let [rows, cols] = input[0].split(' ').map(Number);

let matrix = [];
let matrix2 = [];

for(let i = 1; i <= rows; i++){
    const rowData = input[i].split(' ').map(Number);
    matrix.push(rowData);
}
for(let i = rows + 1; i <= rows * 2; i++){
    const rowData = input[i].split(' ').map(Number);
    matrix2.push(rowData);
}

for (let i = 0; i < rows; i++){
    let str = '';
    for (let j = 0; j < cols; j++){
        if (matrix[i][j] === matrix2[i][j]){
            str += 0 + ' ';
        } else {
            str += 1 + ' ';
        }
    }
    console.log(str)
}