function solution(n) {
    let array = [];
    for(let i = 1; i <= n; i++){
        if(n % i === 0) array.push(Math.floor(n/i));
    }
    return array.sort((a, b) => a - b);
}