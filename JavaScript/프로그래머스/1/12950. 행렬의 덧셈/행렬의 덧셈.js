function solution(arr1, arr2) {
    return arr1.map((row, rowIdx) =>
                    row.map((val, colIdx) => val + arr2[rowIdx][colIdx]));
}