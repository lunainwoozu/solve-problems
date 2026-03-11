function solution(money) {
    let n = Math.floor(money / 5500);
    let m = money - n*5500;
    return [n, m];
}