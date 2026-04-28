function solution(numbers) {
    let newn = [...numbers].sort((a,b) => a - b);
    return Math.max(newn[0] * newn[1], newn[newn.length - 1] * newn[newn.length - 2]);
}