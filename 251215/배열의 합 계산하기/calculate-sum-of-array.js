let A = [3, 1, 4, 5, 9];
let B = [A[1], A[3], A[4]]
let result = 0;

for (let i = 0; i < B.length; i++){
    result += B[i];
}

console.log(result)