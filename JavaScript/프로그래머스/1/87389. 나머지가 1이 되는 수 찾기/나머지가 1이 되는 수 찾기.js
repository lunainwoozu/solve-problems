function solution(n) {
    let x = 1;
    while (x < n) {
        x++;
        if (n % x === 1) break;
    }
    return x;
}